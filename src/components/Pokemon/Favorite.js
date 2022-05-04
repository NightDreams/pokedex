import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { addPokemonFavoriteApi } from "../../api/favorite";

export default function Favorite(props) {
  const { id } = props;

  const addFavorite = async () => {
    await addPokemonFavoriteApi(id);
  };

  return (
    <FontAwesome5
      name="heart"
      color="#fff"
      size={20}
      onPress={addFavorite}
      style={{ marginRight: 20 }}
    />
  );
}
