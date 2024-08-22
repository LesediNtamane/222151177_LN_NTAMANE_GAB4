import { Tabs } from 'expo-router';
import React from 'react';
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          left: '20%',
          right: '20%',
          height: 60,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: 30,
          borderWidth: 0,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowRadius: 20,
          shadowOffset: { width: 0, height: 5 },
          overflow: 'hidden',
        },
        tabBarBackground: () => (
          <BlurView tint="light" intensity={30} style={StyleSheet.absoluteFill} />
        ),
        tabBarItemStyle: {
          borderRadius: 30,
        },
        tabBarIconStyle: {
          marginTop: 8,
        },
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'cart' : 'cart-sharp'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'wallet' : 'wallet'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5 name={'user-alt'} color={color} size={18} style={{ marginBottom: 1 }} />
          ),
        }}
      />
    </Tabs>
  );
}
