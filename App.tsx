import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';  
import Main from './src/components/Main';
import { useFonts, Inter_300Light, Inter_400Regular, Inter_700Bold , Inter_900Black } from '@expo-google-fonts/inter';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_300Light, Inter_400Regular, Inter_900Black, Inter_700Bold
  });

  if (!fontsLoaded) {
    return null
  }
  return (
    <View>
      <Main></Main>
      <StatusBar style="auto" />
    </View>
  )
}