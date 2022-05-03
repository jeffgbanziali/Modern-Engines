import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
//import Logo from '../../../assets/Logo/snack-icon.png';
import Login from "../../../components/Login/Login";
import Button from "../../../components/Button/Button";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const NewPassword = () => {
  const { control, handleSubmit } = useForm();

  const navigation = useNavigation();

  const onSubmitPressed = () => {
    console.warn(data);
    navigation.navigate("HomeScreen");
  };
  const onSignInPressed = () => {
    console.log("onSingInPress");
    navigation.navigate("SignIn");
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#2D55A2" }}
    >
      <View style={styles.root}>
        <Text style={styles.title}>Réinitialiser votre mot de passe</Text>

        <Login
          placeholder="Identifiant"
          name="username"
          control={control}
          rules={{ required: "Username is required" }}
        />
        <Login
          placeholder="Entrer votre code"
          name="code"
          control={control}
          rules={{ required: "Code is required" }}
        />
        <Login
          placeholder="Entrer votre nouveau de passe"
          name="password"
          control={control}
          secureTextEntry
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password should be at least 8 characters long",
            },
          }}
        />
        <Button text="Renvoyer" onPress={handleSubmit(onSubmitPressed)} />

        <Button text="Se connecter" onPress={onSignInPressed} type="QUATERY" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 60,
  },
  title: {
    fontSize: 24,
    color: "white",
    margin: 10,
  },
});

export default NewPassword;
