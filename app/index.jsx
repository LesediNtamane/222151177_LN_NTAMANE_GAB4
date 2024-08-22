import React from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import tw from 'twrnc';
import { BlurView } from 'expo-blur';

const Index = () => {
  const router = useRouter();

  const handlePress = () => {
    router.push('form');
  }

  return (
    <SafeAreaView style={tw`flex-1 bg-slate-800`}>
      <Image source={{ uri: 'https://i.pinimg.com/564x/62/09/9e/62099e592621dce432115ccb8864edfd.jpg' }} resizeMode='cover' style={styles.img} />
      <View>
        <Text style={[tw`w-55 text-emerald-700 top-20 ml-8`, styles.Header]}>What's on your plate today?</Text>
      </View>
      <View style={tw`flex-1 mt-70 justify-center items-center`}>
        <BlurView intensity={500} style={styles.blurContainer}>
          <Pressable onPress={handlePress} style={styles.btn}>
            <Text style={tw`font-semibold text-lg text-center text-white`}>Get Started</Text>
          </Pressable>
        </BlurView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Header: {
    fontSize: 55,
    fontFamily: 'Bitter_500Medium',
    lineHeight: 75,
    textAlign: 'left',
  },
  blurContainer: {
    height: 50,
    width: 160, 
    opacity: 0.9,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#00000000', 
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(255, 255, 255, 0.3)', 
    borderWidth: 1, 

  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  img: {
    ...StyleSheet.absoluteFillObject,
  },
})

export default Index;
