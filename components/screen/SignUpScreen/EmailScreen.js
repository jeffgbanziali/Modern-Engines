import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Login from "../../../components/Login/Login";
import Button from "../../../components/Button/Button";
import { useNavigation } from "@react-navigation/native";

const EmailScreen = () => {
  const [code, setCode] = useState("");
  const navigation = useNavigation();

  const onConfirmPressed = () => {
    console.log("onConfirmPressed");
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
        placeholder="Entrer votre code de confirmation"
        value={code}
        setValue={setCode}
        secureTextEntry={true}
      />
      <Button text="Confirmer le code" onPress={onConfirmPressed} />
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
