// routes/notifications.js
const router = require('express').Router();
const { protect } = require('../middleware/auth');
const User = require('../models/User');
const webpush = require('web-push');

// Configure web-push
if (process.env.VAPID_PUBLIC_KEY && process.env.VAPID_PRIVATE_KEY) {
  webpush.setVapidDetails(
    'mailto:' + (process.env.VAPID_EMAIL || 'admin@linguaflow.app'),
    process.env.VAPID_PUBLIC_KEY,
    process.env.VAPID_PRIVATE_KEY
  );
}

// POST /api/notifications/subscribe
router.post('/subscribe', protect, async (req, res, next) => {
  try {
    const { subscription } = req.body;
    await User.findByIdAndUpdate(req.user.id, {
      pushSubscription: subscription,
      notificationsEnabled: true
    });
    res.json({ message: 'Push subscription saved' });
  } catch (err) { next(err); }
});

// DELETE /api/notifications/unsubscribe
router.delete('/unsubscribe', protect, async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      pushSubscription: null,
      notificationsEnabled: false
    });
    res.json({ message: 'Unsubscribed from notifications' });
  } catch (err) { next(err); }
});

// POST /api/notifications/test
router.post('/test', protect, async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user.pushSubscription) {
      return res.status(400).json({ error: 'No push subscription found' });
    }
    const payload = JSON.stringify({
      title: '📚 LinguaFlow',
      body: '¡Es hora de practicar! Tu racha te espera.',
      icon: '/icons/icon-192.png',
      url: '/dashboard'
    });
    await webpush.sendNotification(user.pushSubscription, payload);
    res.json({ message: 'Test notification sent' });
  } catch (err) { next(err); }
});

// GET /api/notifications/vapid-public-key
router.get('/vapid-public-key', (req, res) => {
  res.json({ publicKey: process.env.VAPID_PUBLIC_KEY || '' });
});

module.exports = router;
