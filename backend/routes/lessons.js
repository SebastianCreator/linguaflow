// routes/lessons.js
const router = require('express').Router();
const lessonController = require('../controllers/lessonController');
const { protect, optionalAuth } = require('../middleware/auth');

router.get('/', optionalAuth, lessonController.getLessons);
router.get('/curriculum/:language/:level', optionalAuth, lessonController.getCurriculum);
router.get('/:id', optionalAuth, lessonController.getLessonById);
router.post('/:id/complete', protect, lessonController.completeLesson);

module.exports = router;
