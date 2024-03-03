import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';  
import Main from './src/components/Main';
import { useFonts, Inter_300Light, Inter_700Bold , Inter_900Black } from '@expo-google-fonts/inter';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_300Light, Inter_900Black, Inter_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Main></Main>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003049',
    justifyContent: 'flex-end',
  },
});
