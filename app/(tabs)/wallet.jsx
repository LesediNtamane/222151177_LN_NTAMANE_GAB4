import React from 'react';
import { View, Text, Image, Pressable, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw, { create, style } from 'twrnc';

export default function Wallet() {
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <Text style={styles.Header}>Wallet</Text>
      <View style={tw`items-center mt-10 px-4`}>
        <View style={tw`w-full bg-white rounded-xl shadow-lg p-4`}>
          <Image
            source={require('../../assets/images/card.png')}
            resizeMode="contain"
            style={tw`w-full h-48 rounded-lg mb-4`}
          />
          <View style={tw`flex-row justify-around`}>
            <Pressable style={tw`flex-1 py-3 mx-1 rounded-lg bg-indigo-100`}>
              <Text style={tw`text-center text-indigo-600 font-semibold`}>
                Orders
              </Text>
            </Pressable>
            <Pressable style={tw`flex-1 py-3 mx-1 rounded-lg bg-indigo-100`}>
              <Text style={tw`text-center text-indigo-600 font-semibold`}>
                Payments
              </Text>
            </Pressable>
            <Pressable style={tw`flex-1 py-3 mx-1 rounded-lg bg-indigo-100`}>
              <Text style={tw`text-center text-indigo-600 font-semibold`}>
                Balance
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles =StyleSheet.create({
  Header: {
    fontFamily: 'Bitter_400Regular',
    fontSize: 25,
    marginTop: 20,
    textAlign: 'center',
  },
})
