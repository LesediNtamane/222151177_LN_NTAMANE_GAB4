import {
  useFonts,
  Bitter_100Thin,
  Bitter_200ExtraLight,
  Bitter_300Light,
  Bitter_400Regular,
  Bitter_500Medium,
}  
from '@expo-google-fonts/bitter';


export  const useCustomFonts = () =>{
  const [bitterLoaded] = useFonts({
    Bitter_100Thin,
    Bitter_200ExtraLight,
    Bitter_300Light,
    Bitter_400Regular,
    Bitter_500Medium

  })
  return  bitterLoaded;

}

