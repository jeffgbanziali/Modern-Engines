import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useState } from "react";
import Login from "../../../components/Login/Login";
import Button from "../../../components/Button/Button";

const SignInScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onSignInPressed = () => {
    console.warn("Sign in");
  };
  const onForgotPasswordPressed = () => {
    console.warn("ForgotPasswordPressed");
  };
  const navigation = useNavigation();
  const onSingUpPressed = () => {
    console.warn("onSingUpPress");
    navigation.navigate("Menu");
  };
  return (
    <View style={styles.root}>
      <Login
        placeholder="E-mail ou numéro de téléphone"
        value={username}
        setValue={setUsername}
      />
      <Login
        placeholder="Mot de passe"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <Button />
      <Button
        text="Mot de passe"
        onPress={onForgotPasswordPressed}
        type="TERTIARY"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 60,
    marginTop: "50%",
  },
});

export default SignInScreen;
