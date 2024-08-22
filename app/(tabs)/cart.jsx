import React from 'react';
import { View,Text,StyleSheet,Image,Pressable,ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';

const Cart = () => {
  return (
    <SafeAreaView style={tw`flex-1`}>
      <ScrollView showsVerticalScrollIndicator={true} >
      <Text style={styles.Heading}>Cart</Text>
      <View style={tw`justify-center items-center gap-6 p-10`}>
      <View style={tw`justify-center items-center w-80 h-50 rounded-md bg-white`}>
        <Image source={{uri:'https://i.pinimg.com/564x/4c/af/b3/4cafb31fbf18444ffcda788e404ac59d.jpg'}} resizeMode='cover' style={tw`w-70 items-center h-35 rounded-md`}/>
        <Text>Fudge Brownies</Text>
        <Text>R210.99</Text>
      </View>
      <View style={tw`justify-center items-center w-80 h-50 rounded-md bg-white`}>
        <Image source={{uri:'https://i.pinimg.com/564x/ec/d7/cb/ecd7cb7d5b809d1412ad9f03809fb016.jpg', description: 'Cinnamon Donut'}} resizeMode='cover' style={tw`w-70 items-center h-35 rounded-md`}/>
        <Text>Cinnamon Donuts</Text>
        <Text>R119.99</Text>
      </View>
      <View style={tw`justify-center items-center w-80 h-50 rounded-md bg-white`}>
        <Image source={{uri:'https://i.pinimg.com/564x/96/e1/c9/96e1c97e0f5dd8b6b1b83a6838f0203d.jpg'}} resizeMode='cover' style={tw`w-70 items-center h-35 rounded-md`}/>
        <Text>Crunchy Onion Rings</Text>
        <Text>R300.49</Text>
      </View>
      <View style={tw`items-center justify-center`}>
      <Pressable style={tw`w-80 items-center justify-center bg-black bottom-10 h-8 rounded`}><Text style={tw`font-medium text-white`}>Checkout</Text></Pressable>
      </View>
      </View>
      </ScrollView>
      
    </SafeAreaView>  
)
}
const styles = StyleSheet.create({
  Heading:{
    fontFamily:'Bitter_400Regular',
    fontSize:25,
    marginLeft:5,
  }
})

export default Cart;