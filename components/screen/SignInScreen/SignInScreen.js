import React from "react";
import { View, StyleSheet, Image, TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import { useForm, Controller } from "react-hook-form";
import Login from "../../../components/Login/Login";
import Button from "../../../components/Button/Button";

const SignInScreen = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { error },
  } = useForm();
  console.log(error);

  const onSignInPressed = (data) => {
    console.log(data);
    navigation.navigate("HomeScreen");
  };
  const onForgotPasswordPressed = () => {
    console.warn("ForgotPasswordPressed");
    navigation.navigate("ResetYourPassword");
  };

  const onSingUpPressed = () => {
    navigation.navigate("SignUp");
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Login
          name="username"
          placeholder="Username"
          control={control}
          rules={{ required: "Username is required" }}
        />

        <Login
          name="password"
          placeholder="Password"
          secureTextEntry
          control={control}
          rules={{
            required: "Password is required",
            minLength: {
              value: 3,
              message: "Password should be minimum 3 characters long",
            },
          }}
        />
        <Button text="Se connecter" onPress={handleSubmit(onSignInPressed)} />
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
    </ScrollView>
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
