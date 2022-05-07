import { View, Text, ScrollView } from "react-native";
import React from "react";

const Favorite = () => {
  return (
    <ScrollView style={{ backgroundColor: "#2D55A2" }}>
      <View style={{ alignItems: "center", marginTop: 50 }}>
        <Text style={{ fontSize: 40 }}>Settings</Text>
      </View>
    </ScrollView>
  );
};

export default Favorite;
