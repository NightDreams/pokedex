import React, { useEffect, useState } from "react";
import { Text, SafeAreaView } from "react-native";
import { getPokemonsApi } from "../api/pokemon";

export default function Pokedex() {
  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi();
      console.log(
        "🚀 ~ file: Pokedex.js ~ line 15 ~ loadPokemons ~ response",
        response
      );
    } catch (error) {
      console.error(
        "🚀 ~ file: Pokedex.js ~ line 23 ~ loadPokemons ~ error",
        error
      );
    }
  };

  return (
    <SafeAreaView>
      <Text>Pokedex</Text>
    </SafeAreaView>
  );
}
