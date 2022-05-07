import { View, TextInput, StyleSheet } from "react-native";
import React from "react";

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <TextInput style={styles.searchInput} placeholder="Rechercher..." />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    paddingLeft: 8,
    marginTop: 20,
    borderRadius: 20,
    justifyContent: "center",
  },
  searchInput: {
    width: "100%",
    height: "100%",
    paddingLeft: 8,
    fontSize: 16,
  },
});
export default SearchBar;
