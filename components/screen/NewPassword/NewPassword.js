import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
//import Logo from '../../../assets/Logo/snack-icon.png';
import Login from "../../../components/Login/Login";
import Button from "../../../components/Button/Button";

const NewPassword = () => {
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const onSubmitPressed = () => {
    console.log("onSubmitPressed");
  };
  const onSignInPress = () => {
    console.log("onSingInPress");
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Réinitialiser votre mot de passe</Text>

      <Login placeholder="Entrer votre code" value={code} setValue={setCode} />
      <Login
        placeholder="Entrer votre nouveau de passe"
        value={newPassword}
        setValue={setNewPassword}
      />
      <Button text="Renvoyer" onPress={onSubmitPressed} />

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

export default NewPassword;
