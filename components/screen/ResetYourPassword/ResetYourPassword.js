import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
//import Logo from '../../../assets/Logo/snack-icon.png';
import Login from "../../../components/Login/Login";
import Button from "../../../components/Button/Button";

const ResetYourPassword = () => {
  const [username, setUsername] = useState("");

  const onConfirmPressed = () => {
    console.log("onConfirmPressed");
  };
  const onSignInPress = () => {
    console.log("onSingInPress");
  };
  const onRessendPress = () => {
    console.log("onRessendPress");
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Réinitialiser votre mot de passe</Text>

      <Login
        placeholder="Entrer votre identifiant"
        value={username}
        setValue={setUsername}
      />
      <Button text="Renvoyer" onPress={onRessendPress} />
      <Button text="Se connecter" onPress={onSignInPress} type="QUATERY" />
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

export default ResetYourPassword;
