import React from 'react';
import useFormContext from '../hooks/useFormContext';
import { View, Text, Pressable, StyleSheet, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import { router } from 'expo-router';

export default function Form() {
  const { page, setPage, formData, setFormData, FormTitles, PageDisplay } = useFormContext();

  const handlesubmit =() =>{
    router.push('/(tabs)/home');
  }

  return (
    <SafeAreaView style={tw`flex-1`}>
      <View style={styles.container}>
        <View
          style={[
            styles.progressBar,
            { width: page === 0 ? '33.3%' : page === 1 ? '66.6%' : '100%' },
          ]}
        />
      </View>


      {/* Display current form title */}
      <View style={styles.header}>
        <Text style={styles.headerText}>{FormTitles[page]}</Text>
      </View>

      <View style={tw`w-full top-20 h-100`}>{PageDisplay()}


      <View style={tw`flex-row gap-x-10 items-baseline`}>

      <Pressable
        disabled={page === 0}
        onPress={() => setPage((currPage) => currPage - 1)}
        style={tw`w-1/4 h-10 rounded justify-center bg-black ml-5`}
      >
        <Text style={tw`font-medium text-white text-center`}>Prev</Text>
      </Pressable>

      </View>

  
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 4,
    backgroundColor: 'white',
    marginBottom: -4,
    borderRadius: 1,
    overflow: 'hidden',
    top: 5,

  },
  progressBar: {
    height: '100%',
    backgroundColor: 'black',
  },
  formContainer: {},

  header: {
    justifyContent:'center',
    alignItems:'center',
    top:15,
    overflow:'hidden',
    
  },
  headerText:{
    fontFamily:'Bitter_400Regular',
    fontSize:25,
  },
 
});
