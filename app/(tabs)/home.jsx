import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable, ScrollView,Alert } from 'react-native';
import tw from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchBar } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import EvilIcons from '@expo/vector-icons/EvilIcons';

// Sample data for food items
const foodItems = [
  { id: '1', image: 'https://i.pinimg.com/564x/b8/b2/2b/b8b22bb57bd8550ad59a1b63b9f81d44.jpg', description: 'Beef Burger', price: 'R50.99', cart: <Ionicons name="add-circle-sharp" size={24} color="black" /> },
  { id: '2', image: 'https://i.pinimg.com/564x/b1/4e/96/b14e967be4d2d4d121ec19d6de13ea7c.jpg', description: 'Pepperoni Pizza', price: 'R86.99', cart: <Ionicons name="add-circle-sharp" size={24} color="black" /> },
  { id: '3', image: 'https://i.pinimg.com/564x/d0/ea/a1/d0eaa109f1236075da01b05c276e4f7e.jpg', description: 'Cheesy Fries', price: 'R82.99', cart: <Ionicons name="add-circle-sharp" size={24} color="black" /> },
  { id: '4', image: 'https://i.pinimg.com/564x/90/e9/8d/90e98d529004c3eb00ab135573e19369.jpg', description: 'Salmon Sushi', price: 'R100.99', cart: <Ionicons name="add-circle-sharp" size={24} color="black" /> },
  { id: '5', image: 'https://i.pinimg.com/564x/ca/ad/87/caad87b58d69c00fbc5348c1eedd20eb.jpg', description: 'Seafood Ramen Boil', price: 'R66.99', cart: <Ionicons name="add-circle-sharp" size={24} color="black" /> },
  { id: '6', image: 'https://i.pinimg.com/564x/96/e1/c9/96e1c97e0f5dd8b6b1b83a6838f0203d.jpg', description: 'Crunchy Onion Rings', price: 'R300.49', cart: <Ionicons name="add-circle-sharp" size={24} color="black" /> },
  { id: '7', image: 'https://i.pinimg.com/564x/16/05/e6/1605e6cce4ff0f2e77848f0939cc35ac.jpg', description: 'Raspberry Ice Cream', price: 'R89.99', cart: <Ionicons name="add-circle-sharp" size={24} color="black" /> },
  { id: '8', image: 'https://i.pinimg.com/564x/a1/09/49/a1094953d2990a7127a8e4d1e7b02715.jpg', description: 'Chocolate Milkshake', price: 'R145.49', cart: <Ionicons name="add-circle-sharp" size={24} color="black" /> },
  { id: '9', image: 'https://i.pinimg.com/564x/5f/ee/a5/5feea520b484a748ea9180dd8ec2e732.jpg', description: 'Blueberry Cookies', price: 'R109.49', cart: <Ionicons name="add-circle-sharp" size={24} color="black" /> },
  { id: '10', image: 'https://i.pinimg.com/564x/4c/af/b3/4cafb31fbf18444ffcda788e404ac59d.jpg', description: 'Fudge Brownie', price: 'R210.99', cart: <Ionicons name="add-circle-sharp" size={24} color="black" /> },
  { id: '11', image: 'https://i.pinimg.com/564x/ec/d7/cb/ecd7cb7d5b809d1412ad9f03809fb016.jpg', description: 'Cinnamon Donut', price: 'R119.99', cart: <Ionicons name="add-circle-sharp" size={24} color="black" /> },
  { id: '12', image: 'https://i.pinimg.com/564x/f5/2e/86/f52e8676d963cc0363c1798cabd8ab75.jpg', description: 'Pretzel Bites', price: 'R255.49', cart: <Ionicons name="add-circle-sharp" size={24} color="black" /> },
];

export default function App() {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(foodItems);

  useEffect(() => {
    const searchResults = foodItems.filter((f) =>
      f.description.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(searchResults.length > 0 ? searchResults : []);
  }, [search]);
  
//  show an alert when user clicks the add button
  const handleAddToCart = (item) => {
    Alert.alert(
      "Item Added to Cart",
      `You have added ${item.description} to your cart.`,
      [
        {
          text: "Go to Cart",
          onPress: () => {
            router.push('cart')
          },
        },
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
        },
      ]
    );
  };
  const router = useRouter();


  return (
    <SafeAreaView style={tw`flex-1`}>
      <ScrollView>
        <View style={tw`font-medium top-10 flex-row items-center ml-1`}>


          <Pressable><Ionicons name="location" size={24} color="black" /></Pressable>

          <Text>Confirm delivery Address</Text>
          </View>
          <View style={tw`relative `} ><Pressable style={tw`items-center `} ><EvilIcons style={tw`top-4 mr-3 right-0 absolute`} name="navicon" size={24} color="black" /></Pressable></View>

        <View style={tw`items-center justify-center mt-20`}>
          <SearchBar
            placeholder='Search'
            value={search}
            onChangeText={(text) => setSearch(text)}
            containerStyle={tw`mb-0 w-full items-center justify-center`}
            inputContainerStyle={tw`bg-gray-200`}
            inputStyle={tw`text-black`}
            placeholderTextColor='gray'
          />
        </View>
        <View style={tw`flex-row p-1 items-center justify-center mt-10`}>
          <ScrollView showsHorizontalScrollIndicator={true} horizontal={true}>
          <View style={tw`w-60 h-30 rounded-md bg-black items-center justify-center opacity-95 `}>
            <Image source={{uri:'https://i.pinimg.com/736x/36/92/d7/3692d7ddaf5af752d738b6919797c5d8.jpg'}} resizeMode='conatin' style={tw`w-full h-full rounded-md`} />
            <Text style={tw`text-black font-bold absolute opacity-100 `}>Promos</Text>
          </View>
          <View style={tw`w-60 h-30 rounded-md bg-black items-center justify-center opacity-95 `}>
          <Image source={{uri:'https://i.pinimg.com/564x/51/52/9c/51529c6765474c4765754f9dd6b11a25.jpg'}} resizeMode='conatin' style={tw`w-full h-full rounded-md`} />
            <Text style={tw`text-black font-bold absolute opacity-100 `}>Nearby Restaurants</Text>
          </View>
          <View style={tw`w-60 h-30 rounded-md bg-black items-center justify-center opacity-95 `}>
          <Image source={{uri:'https://i.pinimg.com/564x/fa/ac/d4/faacd4ced1ca64eccc42f93007262f19.jpg'}} resizeMode='conatin' style={tw`w-full h-full rounded-md`} />
            <Text style={tw`text-black font-bold absolute opacity-100`}>Delivery</Text>
          </View>
          </ScrollView>
        </View>
        <View style={tw`flex-row flex-wrap items-center justify-center mt-5`}>
          {filtered.map(item => (
            <View key={item.id} style={tw`w-1/2 p-5`}>
              <Image source={{ uri: item.image }} resizeMode='cover' style={styles.img} />
              <Text>{item.description}</Text>
              <Text>{item.price}</Text>
              <Pressable onPress={() => handleAddToCart(item)}>
                {item.cart}
              </Pressable>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  img: {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 30,
    width: 150,
    height: 120,
  },
});
