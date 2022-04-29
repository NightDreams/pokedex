import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//screens
import Favorite from "../screens/Favorite";
import Pokedex from "../screens/Pokedex";
import Account from "../screens/Account";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Podex" component={Pokedex} />
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}
