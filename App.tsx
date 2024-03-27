import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';  
import { useFonts, Inter_300Light, Inter_400Regular, Inter_700Bold , Inter_900Black } from '@expo-google-fonts/inter';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/Screens/Home';
import BankAccount from './src/components/Screens/BankAccount';
import Inflow from './src/components/Screens/Inflow';
import Outflow from './src/components/Screens/Outflow';
import Finances from './src/components/Screens/Finances';

const Stack = createNativeStackNavigator()

export default function App( {navigation} ) {
  let [fontsLoaded] = useFonts({
    Inter_300Light, Inter_400Regular, Inter_900Black, Inter_700Bold
  });

  if (!fontsLoaded) {
    return null
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{headerShown: false}} />
        <Stack.Screen name='BankAccount' component={BankAccount}/>
        <Stack.Screen name='Inflow' component={Inflow}/>
        <Stack.Screen name='Outflow' component={Outflow}/>
        <Stack.Screen name='Finances' component={Finances}/>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}