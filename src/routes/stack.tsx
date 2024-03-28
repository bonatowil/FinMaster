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
    BankAccount: undefined,
    Inflow: undefined,
    Outflow: undefined,
    Finances: undefined,
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>

export default function StackComponent() {
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