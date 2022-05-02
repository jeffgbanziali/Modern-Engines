import React from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Login from "../../../components/Login/Login";
import Button from "../../../components/Button/Button";

const SignInScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSignInPressed = () => {
    console.warn("Sign in");
    navigation.navigate("HomeScreen");
  };
  const onForgotPasswordPressed = () => {
    console.warn("ForgotPasswordPressed");
    navigation.navigate("ResetYourPassword");
  };

  const onSingUpPressed = () => {
    console.warn("Sign up");
    navigation.navigate("SignUp");
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
      <Button onPress={onSignInPressed} />
      <Button
        text="Mot de passe"
        onPress={onForgotPasswordPressed}
        type="TERTIARY"
      />
      <Button
        text="Don't have an account? Create one"
        onPress={onSingUpPressed}
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
