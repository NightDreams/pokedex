import React from "react";
import { View, Text } from "react-native";

export default function Pokemon(props) {
  const { navigation, route } = props;
  console.log(route);
  return (
    <View>
      <Text>Estás viendo un POKEMON</Text>
    </View>
  );
}
