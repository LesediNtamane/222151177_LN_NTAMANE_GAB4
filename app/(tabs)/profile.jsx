import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import useFormContext from '../../hooks/useFormContext'; 

export default function ProfileTab() {
  const { formData } = useFormContext(); 
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const { height } = Dimensions.get('window');

//ensures the users form data is displayed in the profile components through ternary conditional rendering
  return (
    <SafeAreaView style={[tw`flex-1`, { backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff' }]}>
      <ScrollView 
        contentContainerStyle={[tw`p-4`, { paddingBottom: 80 }]} 
        style={{ flexGrow: 1 }}
        contentInsetAdjustmentBehavior="always"
      >
        <View style={[tw`flex-col gap-6`, { paddingBottom: 20 }]}>
          <Text style={[styles.Header, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Profile</Text>

          <View style={[tw`w-80 justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-indigo-50'} rounded p-4 items-center`]}>
            <Text style={[tw`font-bold text-xl`, { color: isDarkMode ? '#ffffff' : '#000000' }]}>User Details</Text>
            <Text style={{ color: isDarkMode ? '#ffffff' : '#000000' }}>{formData?.name || 'Name Placeholder'}</Text>
            <Text style={{ color: isDarkMode ? '#ffffff' : '#000000' }}>{formData?.email || 'Email Placeholder'}</Text>
            <Text style={{ color: isDarkMode ? '#ffffff' : '#000000' }}>{formData?.cellnumber || 'Cell Number Placeholder'}</Text>
          </View>

          <View style={[tw`w-80 justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-indigo-50'} rounded p-4 items-center`]}>
            <Text style={[tw`font-bold text-xl`, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Address Details</Text>
            <Text style={{ color: isDarkMode ? '#ffffff' : '#000000' }}>{formData?.streetnumber || 'Street Number Placeholder'}</Text>
            <Text style={{ color: isDarkMode ? '#ffffff' : '#000000' }}>{formData?.city || 'City Placeholder'}</Text>
            <Text style={{ color: isDarkMode ? '#ffffff' : '#000000' }}>{formData?.state || 'State Placeholder'}</Text>
            <Text style={{ color: isDarkMode ? '#ffffff' : '#000000' }}>{formData?.zipcode || 'Zip Code Placeholder'}</Text>
          </View>

          <View style={[tw`w-80 justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-indigo-50'} rounded p-4 items-center`]}>
            <Text style={[tw`font-bold text-xl`, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Card Details</Text>
            <Text style={{ color: isDarkMode ? '#ffffff' : '#000000' }}>{formData?.cardnumber || 'Card Number Placeholder'}</Text>
            <Text style={{ color: isDarkMode ? '#ffffff' : '#000000' }}>{formData?.expiration || 'Expiration Placeholder'}</Text>
            <Text style={{ color: isDarkMode ? '#ffffff' : '#000000' }}>{formData?.cvv || 'CVV Placeholder'}</Text>
          </View>

          {/* Settings Section*/}
          {/* Implementigng a simple dark theme toggler for this specific screen */}
          <Text style={[styles.Header, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Settings</Text>
          <View style={tw`flex-row justify-between items-center`}>
            <Text style={{ color: isDarkMode ? '#ffffff' : '#000000' }}>Toggle Theme</Text>
            <Switch
              value={isDarkMode}
              onValueChange={toggleTheme}
              thumbColor={isDarkMode ? '#ffffff' : '#000000'}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Header: {
    fontFamily: 'Bitter_400Regular',
    fontSize: 25,
  },
});
