import { View, Text } from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Feather from "react-native-vector-icons/Feather";

import HomeScreen from "../components/screen/HomeScreen/HomeScreen";
import MenuScreen from "../components/screen/HomeScreen/MenuScreen";
import FavoriteScreen from "../components/screen/HomeScreen/Favorite";
import Accueil from "../components/screen/HomeScreen/Accueil";

const Tab = createMaterialBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="white"
      barStyle={{ backgroundColor: "#89C47B" }}
    >
      <Tab.Screen
        name="Accueil"
        component={Accueil}
        options={{
          tabBarLabel: "Accueil",
          tabBarIcon: ({ color }) => (
            <Feather name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Feather name="menu" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarLabel: "Favorite",
          tabBarIcon: ({ color }) => (
            <Feather name="heart" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <Feather name="settings" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
