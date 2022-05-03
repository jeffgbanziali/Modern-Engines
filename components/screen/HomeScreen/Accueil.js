import { View, Text, ScrollView } from "react-native";
import React from "react";

const Accueil = () => {
  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 26, fontWeight: "bold", marginTop: "20%" }}>
          Welcome To
        </Text>
        <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 2 }}>
          Modern engines
        </Text>
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
