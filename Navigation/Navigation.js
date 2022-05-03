import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignInScreen from "../components/screen/SignInScreen/SignInScreen";
import SignUpScreen from "../components/screen/SignUpScreen/SignUpScreen";
import EmailScreen from "../components/screen/SignUpScreen/EmailScreen";
import ResetYourPassword from "../components/screen/ResetYourPassword/ResetYourPassword";
import NewPassword from "../components/screen/NewPassword/NewPassword";
import CarsScreen from "../components/screen/HomeScreen/Cars/CarsScreen";
import TabNavigation from "./TabNavigation";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Email" component={EmailScreen} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="ResetYourPassword" component={ResetYourPassword} />
        <Stack.Screen name="HomeScreen" component={TabNavigation} />
        <Stack.Screen name="Cars" component={CarsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
