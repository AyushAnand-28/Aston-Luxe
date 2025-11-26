import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen';
import ModelsScreen from './src/screens/ModelsScreen';
import ModelDetailScreen from './src/screens/ModelDetailScreen';
import AboutScreen from './src/screens/AboutScreen';
import ContactScreen from './src/screens/ContactScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ModelsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#0B0B0D' },
      }}
    >
      <Stack.Screen name="ModelsList" component={ModelsScreen} />
      <Stack.Screen name="ModelDetail" component={ModelDetailScreen} />
    </Stack.Navigator>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarIcon: () => null,
        tabBarStyle: {
          backgroundColor: '#111114',
          borderTopWidth: 1,
          borderTopColor: 'rgba(255,255,255,0.08)',
          height: 72,
          paddingTop: 8,
          paddingBottom: 16,
          paddingHorizontal: 16,
        },
        tabBarActiveTintColor: '#C5A572',
        tabBarInactiveTintColor: '#9C9CAA',
        tabBarLabelStyle: {
          fontWeight: '700',
          letterSpacing: 0.6,
          textTransform: 'uppercase',
          fontSize: 12,
        },
        tabBarItemStyle: {
          paddingVertical: 6,
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Models" component={ModelsStack} />
      <Tab.Screen name="About" component={AboutScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <MainTabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
