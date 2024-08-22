import React from 'react';
import {View,Text, Image, Pressable} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';



export default function Wallet() {
  return (
    <SafeAreaView style={tw`flex-1`}> 
    <View style={tw`rounded justify-center items-center top-10`}>
      <Image source={require('../../assets/images/card.png')}
      resizeMode='contain'
      style={tw`w-100 h-60 rounded`}
      />
      <Pressable style={tw`w-150 items-center justify-center bg-white h-8 border-b-2 border-indigo-50`}>
        <Text style={tw`text-center font-medium`}>Orders</Text>
        </Pressable>
        <Pressable style={tw`w-150 items-center justify-center bg-white h-8 border-b-2 border-indigo-50`}>
        <Text style={tw`text-center font-medium`}>Payments</Text>
        </Pressable>
        <Pressable style={tw`w-150 items-center justify-center bg-white h-8 `}>
        <Text style={tw`text-center font-medium`}>Balance</Text>
        </Pressable>
      </View>
      
      </SafeAreaView>
  )
}
