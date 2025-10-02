import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import ModelsScreen from './src/screens/ModelsScreen';
import AboutScreen from './src/screens/AboutScreen';
import ContactScreen from './src/screens/ContactScreen';

const TABS = ['Home', 'Models', 'About', 'Contact'];

export default function App() {
  const [active, setActive] = useState('Home');

  const renderScreen = () => {
    switch (active) {
      case 'Models':
        return <ModelsScreen />;
      case 'About':
        return <AboutScreen />;
      case 'Contact':
        return <ContactScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#0B0B0D' }}>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }} edges={['top', 'left', 'right']}>
        <View style={{ flex: 1 }}>{renderScreen()}</View>
      </SafeAreaView>
      <SafeAreaView edges={['bottom']} style={{ backgroundColor: '#111114' }}>
        <View style={styles.tabbar}>
          {TABS.map((tab) => {
            const isActive = active === tab;
            return (
              <TouchableOpacity key={tab} style={styles.tab} onPress={() => setActive(tab)} activeOpacity={0.8}>
                <Text style={[styles.tabText, { color: isActive ? '#C5A572' : '#C6C6CC' }]}>
                  {tab}
                </Text>
                {isActive ? <View style={styles.indicator} /> : <View style={{ height: 2 }} />}
              </TouchableOpacity>
            );
          })}
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  tabbar: {
    flexDirection: 'row',
    backgroundColor: '#111114',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.08)',
    paddingHorizontal: 16,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
  },
  tabText: {
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  indicator: {
    height: 2,
    width: 28,
    borderRadius: 2,
    backgroundColor: '#C5A572',
    marginTop: 6,
  },
});
