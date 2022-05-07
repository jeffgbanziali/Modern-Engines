import { View, TextInput, StyleSheet } from "react-native";
import React from "react";

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <TextInput style={styles.searchInput} placeholder="Search here..." />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 8,
  },
  searchInput: {
    paddingLeft: 2,
    alignItems: "center",
    marginTop: 10,
  },
});

export default SearchBar;
