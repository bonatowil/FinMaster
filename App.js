import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';  
import { useFonts, Inter_300Light } from '@expo-google-fonts/inter';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_300Light,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Inter_300Light', color: '#fdf0d5', }}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003049',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
