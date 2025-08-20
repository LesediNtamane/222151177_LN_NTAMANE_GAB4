import React from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import { useLocalSearchParams } from 'expo-router';

const Cart = () => {
  const { colors } = useTheme();
  const params = useLocalSearchParams();
  let cart = [];
  try {
    cart = params.cart ? JSON.parse(params.cart) : [];
    if (!Array.isArray(cart)) cart = [];
  } catch (e) {
    cart = [];
  }

  const { router } = require('expo-router');
  // Calculate total
  const total = cart.reduce((sum, item) => {
    const priceNum = parseFloat(item.price.replace(/[^\d.]/g, ''));
    return sum + (isNaN(priceNum) ? 0 : priceNum);
  }, 0);

  return (
  <SafeAreaView style={[tw`flex-1`, { backgroundColor: colors.background }]}>
  <ScrollView showsVerticalScrollIndicator={true} style={[tw`p-6 mb-10`, { backgroundColor: colors.background }] }>
  <Text style={[styles.Heading, { color: colors.text }]}>Cart</Text>
        <View style={tw`justify-center items-center gap-6 p-10`}>
          {cart.length === 0 ? (
            <Text>Your cart is empty.</Text>
          ) : (
            cart.map((item) => (
              <View key={item.id} style={tw`justify-center items-center w-80 h-50 rounded-md bg-white`}>
                <Image source={{ uri: item.image }} resizeMode='cover' style={tw`w-70 items-center h-35 rounded-md`} />
                <Text style={{ color: colors.text }}>{item.description}</Text>
                <Text style={{ color: colors.text }}>{item.price}</Text>
              </View>
            ))
          )}
        </View>
        {/* Order Total Section */}
        <View style={tw`items-center justify-center mb-6`}>
            <Text style={[tw`text-lg font-bold`, { color: colors.text }]}>Order Total: R{total.toFixed(2)}</Text>
        </View>
        {/* Checkout Button at the bottom */}
        <View style={tw`items-center justify-center mb-10`}>
          <Pressable
            style={tw`w-80 items-center justify-center bg-black h-8 rounded`}
            onPress={() => router.push({ pathname: '/checkout', params: { cart: JSON.stringify(cart) } })}
          >
            <Text style={tw`font-medium text-white`}>Checkout</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Heading: {
    fontFamily: 'Bitter_400Regular',
    fontSize: 25,
    marginLeft: 5,
    marginTop: 20,
    textAlign: 'center',
  },
});

export default Cart;