import React from "react";
import { Text, SafeAreaView } from "react-native";
import { SafeAreaView, Text, Button } from "react-native";
import { getPokemonsFavoriteApi } from "../api/favorite";

export default function Favorite() {
  const checkFavorites = async () => {
    const response = await getPokemonsFavoriteApi();
    console.log(response);
  };

  return (
    <SafeAreaView>
      <Text>Favoritos</Text>
      <Button title="Obtener favoritos" onPress={checkFavorites} />
    </SafeAreaView>
  );
}
