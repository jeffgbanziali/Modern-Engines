import { View, Text, ScrollView } from "react-native";
import React from "react";
import SearchBar from "../../SearchBar/SearchBar";
import Button from "../../Button/Button";

const Accueil = () => {
  return (
    <ScrollView ScrollView style={{ backgroundColor: "#2D55A2" }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 26, fontWeight: "bold", marginTop: "20%" }}>
          Welcome To
        </Text>
        <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 2 }}>
          Modern engines
        </Text>
      </View>
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <SearchBar />
        <Button text="Rechercher" />
      </View>
      <View style={{ marginTop: 2, alignItems: "center" }}>
        <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: "50%" }}>
          Essentiels de notre application
        </Text>
      </View>
    </ScrollView>
  );
};

export default Accueil;
