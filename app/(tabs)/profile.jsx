import React from 'react';
import { View, Text, StyleSheet, ScrollView, Switch } from 'react-native';
import useFormContext from '../../hooks/useFormContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
// import { useThemeContext } from '../../context/ThemeContext'; 

export default function ProfileTab() {
  const { formData } = useFormContext();
  

  return (
    <SafeAreaView style={[tw`flex-1`, {  }]}>
      <ScrollView contentContainerStyle={tw`p-4`}>
        <View style={tw`flex-col gap-10 top-10`}>
          <Text style={[styles.Header, {  }]}>Profile</Text>

          <View style={tw`w-80 justify-center h-30 bg-indigo-50 rounded p-10 items-center`}>
            <Text style={tw`font-bold text-black text-xl`}>User Details</Text>
            <Text style={tw`font-medium`}>{formData.name}</Text>
            <Text>{formData.email}</Text>
            <Text>{formData.cellnumber}</Text>
          </View>

          <View style={tw`w-80 justify-center h-30 bg-indigo-50 rounded p-10 items-center`}>
            <Text style={tw`font-bold text-black text-xl `}>Address Details</Text>
            <Text style={tw`font-medium`}>{formData.streetnumber}</Text>
            <Text>{formData.city}</Text>
            <Text>{formData.state}</Text>
            <Text>{formData.zipcode}</Text>
          </View>

          <View style={tw`w-80 justify-center h-30 bg-indigo-50 rounded p-10 items-center`}>
            <Text style={tw`font-bold text-black text-xl`}>Card Details</Text>
            <Text style={tw`font-medium`}>{formData.cardnumber}</Text>
            <Text>{formData.expiration}</Text>
            <Text>{formData.cvv}</Text>
          </View>

          {/* Settings Section */}
          <Text style={[styles.Header, {  }]}>Settings</Text>
          <View style={tw`flex-row justify-between items-center`}>
            <Text style={{ }}>Dark Mode</Text>
            <Switch
              
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
