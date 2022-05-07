import React from "react";
import { StyleSheet, View } from "react-native";
import CarsList from "./List/CarsList";

const TeslaScreen = () => {
  return (
    <View style={styles.container}>
      <CarsList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TeslaScreen;
