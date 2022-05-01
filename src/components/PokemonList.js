import { StyleSheet, FlatList, View, ActivityIndicator } from "react-native";
import React from "react";
import PokemonCard from "./PokemonCard";

export default function PokemonList(props) {
  const { pokemons, loadPokemons, isNext } = props;

  const loadMore = () => {
    loadPokemons();
  };
  console.log(
    "🚀 ~ file: PokemonList.js ~ line 6 ~ PokemonList ~ props",
    props
  );
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.FlatListContentContainer}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.1}
      listFooterComponent={
        isNext && (
          <ActivityIndicator
            size="large"
            style={styles.spinner}
            color="#AEAEAE"
          />
        )
      }
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
  separator: {
    margin: 5,
  },
  spinner: { marginTop: 20, marginBottom: 60 },
});
