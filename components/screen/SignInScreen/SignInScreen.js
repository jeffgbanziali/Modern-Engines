import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  ImageBackground,
  ScrollView,
} from "react-native";
import bgImage from "../../../assets/Image/Tesla/Model3.jpeg";
import { useNavigation } from "@react-navigation/native";
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
    <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
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
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 40,
    marginTop: "50%",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});

export default SignInScreen;
