import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
//import Logo from '../../../assets/Logo/snack-icon.png';
import Login from "../../../components/Login/Login";
import Button from "../../Button/Button";
import { useNavigation } from "@react-navigation/native";

const SingUpScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [userprename, setUserprename] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

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
    <View style={styles.root}>
      <Text style={styles.title}>Créer un compte</Text>
      <Login placeholder="Nom" value={username} setValue={setUsername} />
      <Login
        placeholder="Prénom"
        value={userprename}
        setValue={setUserprename}
      />
      <Login placeholder="Email" value={email} setValue={setEmail} />
      <Login
        placeholder="Mot de passe"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <Login
        placeholder="Confirmer le mot de passe"
        value={passwordRepeat}
        setValue={setPasswordRepeat}
        secureTextEntry={true}
      />
      <Button text="S'inscrire" onPress={onRegisterPressed} />
      <Button text="Se connecter" onPress={onSignInPressed} />

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
