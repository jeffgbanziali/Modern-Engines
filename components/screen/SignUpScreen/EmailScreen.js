import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Login from "../../../components/Login/Login";
import Button from "../../../components/Button/Button";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const EmailScreen = () => {
  const { control, handleSubmit } = useForm();

  const navigation = useNavigation();

  const onConfirmPressed = (data) => {
    console.warn(data);
    navigation.navigate("HomeScreen");
  };
  const onSignInPress = () => {
    console.log("onSingInPress");
    navigation.navigate("SignIn");
  };
  const onRessendPress = () => {
    console.log("onRessendPress");
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Confirmer</Text>

      <Login
        placeholder="Entrer votre identifiant"
        name="username"
        control={control}
        secureTextEntry={true}
        rules={{
          required: "Username code is required",
        }}
      />
      <Login
        placeholder="Entrer votre code de confirmation"
        name="code"
        control={control}
        secureTextEntry={true}
        rules={{
          required: "Confirmation code is required",
        }}
      />
      <Button
        text="Confirmer le code"
        onPress={handleSubmit(onConfirmPressed)}
      />
      <Button
        text="Renvoyer le code"
        onPress={onRessendPress}
        type="SECONDARY"
      />
      <Button
        text="Revenir à la connexion"
        onPress={onSignInPress}
        type="TERTIARY"
      />
    </View>
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

export default EmailScreen;
