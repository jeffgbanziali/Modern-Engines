import React from "react";
import { StyleSheet, View } from "react-native";
import Navigation from "./Navigation/Navigation";

const App = () => {
  return (
    <View style={styles.root}>
      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#425CB6",
  },
});
export default App;
