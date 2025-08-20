import React from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import useFormContext from '../hooks/useFormContext';

const Checkout = () => {
  const { colors } = useTheme();
  const { formData } = useFormContext();
  const { useLocalSearchParams } = require('expo-router');
  const params = useLocalSearchParams();
  let cart = [];
  try {
    cart = params.cart ? JSON.parse(params.cart) : [];
    if (!Array.isArray(cart)) cart = [];
  } catch (e) {
    cart = [];
  }
  // Calculate total
  const total = cart.reduce((sum, item) => {
    // Remove non-numeric characters and parse price
    const priceNum = parseFloat(item.price.replace(/[^\d.]/g, ''));
    return sum + (isNaN(priceNum) ? 0 : priceNum);
  }, 0);

  return (
    <SafeAreaView style={[tw`flex-1`, { backgroundColor: colors.background }] }>
      <ScrollView contentContainerStyle={[tw`p-6`, { backgroundColor: colors.background }]}>
        <Text style={[styles.heading, { color: colors.text }]}>Checkout Summary</Text>
        <View style={[tw`rounded p-4 mb-6`, { backgroundColor: colors.background }] }>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Address Details</Text>
          <Text style={{ color: colors.text }}>Street Number: {formData.streetnumber}</Text>
          <Text style={{ color: colors.text }}>City: {formData.city}</Text>
          <Text style={{ color: colors.text }}>Province: {formData.province}</Text>
          <Text style={{ color: colors.text }}>Zip Code: {formData.zipcode}</Text>
        </View>
        <View style={[tw`rounded p-4 mb-6`, { backgroundColor: colors.background }] }>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Payment Details</Text>
          <Text style={{ color: colors.text }}>Card Number: {formData.cardnumber}</Text>
          <Text style={{ color: colors.text }}>Expiration: {formData.expiration}</Text>
          <Text style={{ color: colors.text }}>CVV: {formData.cvv}</Text>
        </View>
        <View style={[tw`rounded p-4 mb-6`, { backgroundColor: colors.background }] }>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>User Details</Text>
          <Text style={{ color: colors.text }}>Name: {formData.name}</Text>
          <Text style={{ color: colors.text }}>Email: {formData.email}</Text>
          <Text style={{ color: colors.text }}>Cell Number: {formData.cellnumber}</Text>
        </View>
        <View style={[tw`rounded p-4 mb-6`, { backgroundColor: colors.background }] }>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Order Total</Text>
          <Text style={[tw`text-lg font-bold`, { color: colors.text }]}>R{total.toFixed(2)}</Text>
        </View>
        <Text style={[tw`text-center text-lg font-bold mt-6`, { color: colors.text }]}>Thank you for your order!</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontFamily: 'Bitter_400Regular',
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
  },
});

export default Checkout;
