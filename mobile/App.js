// mobile/App.js — React Native entry point
import React, { useEffect } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Screens (mirroring web frontend structure)
import LoginScreen        from './src/screens/Auth/LoginScreen';
import RegisterScreen     from './src/screens/Auth/RegisterScreen';
import DashboardScreen    from './src/screens/Dashboard/DashboardScreen';
import LanguagesScreen    from './src/screens/Dashboard/LanguagesScreen';
import LessonsScreen      from './src/screens/Lessons/LessonsScreen';
import LessonPlayerScreen from './src/screens/Lessons/LessonPlayerScreen';
import EvaluationsScreen  from './src/screens/Evaluation/EvaluationsScreen';
import ProfileScreen      from './src/screens/Profile/ProfileScreen';

import useAuthStore from './src/store/authStore';
import { setupNotifications } from './src/services/notificationService';

const Stack = createNativeStackNavigator();
const Tab   = createBottomTabNavigator();

const DARK_THEME = {
  dark: true,
  colors: {
    primary:    '#6366F1',
    background: '#0A0F1E',
    card:       '#0F172A',
    text:       '#F1F5F9',
    border:     'rgba(99,102,241,0.15)',
    notification: '#6366F1',
  },
};

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor:'#0F172A', borderTopColor:'rgba(99,102,241,0.15)', paddingBottom:6, height:60 },
        tabBarActiveTintColor: '#6366F1',
        tabBarInactiveTintColor: '#475569',
        tabBarLabelStyle: { fontSize:11, fontWeight:'600' },
      }}
    >
      <Tab.Screen name="Dashboard"   component={DashboardScreen}   options={{ title:'Inicio',    tabBarIcon: ({color}) => <TabIcon emoji="⊞" color={color} /> }} />
      <Tab.Screen name="Languages"   component={LanguagesScreen}   options={{ title:'Idiomas',   tabBarIcon: ({color}) => <TabIcon emoji="🌐" color={color} /> }} />
      <Tab.Screen name="Profile"     component={ProfileScreen}     options={{ title:'Perfil',    tabBarIcon: ({color}) => <TabIcon emoji="◎"  color={color} /> }} />
    </Tab.Navigator>
  );
}

import { Text } from 'react-native';
function TabIcon({ emoji, color }) {
  return <Text style={{ fontSize:20, opacity: color === '#6366F1' ? 1 : 0.5 }}>{emoji}</Text>;
}

export default function App() {
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    setupNotifications();
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#0A0F1E" />
      <NavigationContainer theme={DARK_THEME}>
        <Stack.Navigator screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
          {!isAuthenticated ? (
            <>
              <Stack.Screen name="Login"    component={LoginScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
            </>
          ) : (
            <>
              <Stack.Screen name="Main"           component={TabNavigator} />
              <Stack.Screen name="Lessons"        component={LessonsScreen} />
              <Stack.Screen name="LessonPlayer"   component={LessonPlayerScreen} />
              <Stack.Screen name="Evaluations"    component={EvaluationsScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
