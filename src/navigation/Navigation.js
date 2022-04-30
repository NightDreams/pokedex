import React from "react";
import { Image } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Icon from "react-native-vector-icons/FontAwesome5";
import { FontAwesome5 } from "@expo/vector-icons";

//screens
import Favorite from "../screens/Favorite";
import Account from "../screens/Account";
import PokedexNavigation from "./PokedexNavigation";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Favoritos"
        component={Favorite}
        options={{
          headerTitle: "Favoritos",
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="heart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="PokedexTab"
        component={PokedexNavigation}
        options={{
          // headerTitle: "Pokedex",
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: () => renderPokeball(),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          headerTitle: "Mi cuenta",
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function renderPokeball(color, size) {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={{ width: 75, height: 75 }}
    />
  );
}
