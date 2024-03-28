import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';  
import { useFonts, Inter_300Light, Inter_400Regular, Inter_700Bold , Inter_900Black } from '@expo-google-fonts/inter';

import StackComponent from './src/routes/stack';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_300Light, Inter_400Regular, Inter_900Black, Inter_700Bold
  });

  if (!fontsLoaded) {
    return null
  }
  return (
    <StackComponent/>
  )
}