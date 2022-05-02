import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const Login = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 8,
    marginVertical: 10,
  },
  input: {},
});

export default Login;
