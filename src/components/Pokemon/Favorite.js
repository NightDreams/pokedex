import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
export default function Favorite(props) {
  const { id } = props;

  const addFavorite = () => {
    console.log("Añadir a favoritos", id);
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
