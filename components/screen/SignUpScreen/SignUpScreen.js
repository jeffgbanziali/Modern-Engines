import React, { useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
//import Logo from '../../../assets/Logo/snack-icon.png';
import Login from "../../../components/Login/Login";
import Button from "../../Button/Button";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const SingUpScreen = () => {
  const navigation = useNavigation();
  const { control, handleSubmit, watch } = useForm();
  const pwd = watch("password");
  const onRegisterPressed = () => {
    console.log("Register");
    navigation.navigate("Email");
  };
  const onSignInPressed = () => {
    console.warn("Sign in");
    navigation.navigate("SignIn");
  };
  const onTermsOfUsePressed = () => {
    console.log("onTermsOfUsePressed");
  };
  const onPrivacyPressed = () => {
    console.log("onPrivacyPressed");
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#2D55A2" }}
    >
      <View style={styles.root}>
        <Text style={styles.title}>Créer un compte</Text>
        <Login
          placeholder="Nom"
          name="username"
          control={control}
          rules={{
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name should be at least 3 characters long",
            },
            maxLength: {
              value: 24,
              message: "Name should be max 24 characters long",
            },
          }}
        />
        <Login
          placeholder="Prénom"
          name="prename"
          control={control}
          rules={{
            required: "Prename is required",
            minLength: {
              value: 3,
              message: "Prename should be at least 3 characters long",
            },
            maxLength: {
              value: 24,
              message: "Prename should be max 24 characters long",
            },
          }}
        />
        <Login
          placeholder="Email"
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
          }}
        />
        <Login
          placeholder="Mot de passe"
          name="password"
          control={control}
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password should be at least 8 characters long",
            },
          }}
          secureTextEntry={true}
        />
        <Login
          placeholder="Confirmer le mot de passe"
          name="Password-repeat"
          control={control}
          rules={{
            validate: (value) => value === pwd || "Password do not match",
          }}
          secureTextEntry={true}
        />
        <Button text="S'inscrire" onPress={handleSubmit(onRegisterPressed)} />
        <Button text="Se connecter" onPress={handleSubmit(onSignInPressed)} />

        <Text style={styles.text}>
          By registering, you confirm that you accept our {""}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms Use
          </Text>{" "}
          and {""}
          <Text style={styles.link} onPress={onPrivacyPressed}>
            Privacy Policy{" "}
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 50,
    marginHorizontal: -10,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    color: "white",
    margin: 10,
  },
  text: {
    color: "white",
  },
  link: {
    color: "red",
  },
});

export default SingUpScreen;
