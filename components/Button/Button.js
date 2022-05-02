import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const Button = ({ onPress, text, type = "PRIMARY" }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, styles[`container_${type}`]]}
    >
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 141,
    height: 34,
    padding: 5,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },

  text: {
    fontWeight: "bold",
    color: "#000000",
  },

  container_PRIMARY: {
    backgroundColor: "#89C37B",
  },
  container_TERTIARY: {},
  container_SECONDARY: {
    borderColor: "#3b71f3",
    borderWidth: 1,
  },
  text_SECONDARY: {
    fontWeight: "normal",
    color: "white",
  },
  container_QUATERY: {},
  text_QUATERY: {
    fontWeight: "normal",
    color: "white",
  },
  text_TERTIARY: {
    fontWeight: "bold",
    color: "#000000",
  },
});

export default Button;
