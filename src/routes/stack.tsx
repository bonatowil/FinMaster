import { NavigationContainer } from "@react-navigation/native";
import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import Home from "../screens/Home";
import Inflow from "../screens/Inflow";
import Outflow from "../screens/Outflow";
import BankAccount from "../screens/BankAccount";
import Finances from "../screens/Finances";

const Stack = createNativeStackNavigator();

type StackNavigation = {
    Home: undefined,
    Contas: undefined,
    Entradas: undefined,
    Saídas: undefined,
    Finanças: undefined,
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>

export default function StackComponent() {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={Home} options={{headerShown: false}} />
          <Stack.Screen name='Contas' component={BankAccount} options={{animation: 'fade'}}/>
          <Stack.Screen name='Entradas' component={Inflow} options={{animation: 'fade'}}/>
          <Stack.Screen name='Saídas' component={Outflow} options={{animation: 'fade'}}/>
          <Stack.Screen name='Finanças' component={Finances} options={{animation: 'fade'}}/>
        </Stack.Navigator>
        <StatusBar style="auto"/>
      </NavigationContainer>
      )
}