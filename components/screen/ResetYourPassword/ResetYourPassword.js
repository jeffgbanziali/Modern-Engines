import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
//import Logo from '../../../assets/Logo/snack-icon.png';
import Login from "../../../components/Login/Login";
import Button from "../../../components/Button/Button";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const ResetYourPassword = () => {
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm();

  const onSendPressed = (data) => {
    console.warn(data);
    navigation.navigate("NewPassword");
  };
  const onSignInPress = () => {
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
          name="username"
          control={control}
          placeholder="Entrer votre identifiant"
          rules={{
            required: "Username is required",
          }}
        />
        <Button text="Renvoyer" onPress={handleSubmit(onSendPressed)} />
        <Button text="Se connecter" onPress={onSignInPress} type="QUATERY" />
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

export default ResetYourPassword;
