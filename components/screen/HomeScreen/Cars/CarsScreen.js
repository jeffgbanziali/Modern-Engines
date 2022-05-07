import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import Button from "../../../Button/Button";
import { useNavigation } from "@react-navigation/native";

const CarsScreen = () => {
  const navigation = useNavigation();
  const onTeslaPressed = () => {
    navigation.navigate("Tesla");
  };
  const onReturnPressed = (data) => {
    console.log(data);
    navigation.navigate("HomeScreen");
  };
  return (
    <ScrollView style={{ backgroundColor: "#3C0A0A" }}>
      <View style={{ alignItems: "center", marginTop: 10, marginBottom: -100 }}>
        <Text style={{ fontSize: 40, color: "white" }}>Voitures</Text>
      </View>
      <View style={{ spaceBetween: 20 }}>
        <TouchableOpacity style={{ marginTop: "40%" }} onPress={onTeslaPressed}>
          <Image
            style={{
              position: "relative",
              marginHorizontal: 30,
              width: 100,
              height: 100,
              borderRadius: 50,
            }}
            source={require("../../../../assets/Icons/Tesla1.jpg")}
          />
          <Text
            style={{
              alignItems: "flex-start",
              fontSize: 20,
              fontWeight: "bold",
              marginHorizontal: 50,
              color: "white",
            }}
          ></Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: "-30%", marginLeft: 130 }}>
          <Image
            style={{
              position: "relative",
              marginHorizontal: 30,
              width: 100,
              height: 100,
              borderRadius: 50,
            }}
            source={require("../../../../assets/Icons/Mercedes.png")}
          />
          <Text
            style={{
              alignContent: "center",
              fontSize: 20,
              fontWeight: "bold",
              marginHorizontal: 35,
              color: "white",
            }}
          ></Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: "-30%", marginLeft: 260, marginRight: 20 }}
        >
          <Image
            style={{
              position: "relative",
              marginHorizontal: 30,
              width: 90,
              height: 90,
              borderRadius: 50,
            }}
            source={require("../../../../assets/Icons/Lambo.png")}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginHorizontal: 34,
              color: "white",
            }}
          ></Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: "10%" }}>
          <Image
            style={{
              position: "relative",
              marginHorizontal: 30,
              width: 100,
              height: 100,
              borderRadius: 50,
            }}
            source={require("../../../../assets/Icons/BMW.png")}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginHorizontal: 40,
              color: "white",
            }}
          ></Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: "-31%", marginLeft: 130 }}>
          <Image
            style={{
              position: "relative",
              marginHorizontal: 30,
              width: 100,
              height: 100,
              borderRadius: 50,
            }}
            source={require("../../../../assets/Icons/Porsche.jpg")}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginHorizontal: 40,
              color: "white",
            }}
          ></Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: "-31%", marginLeft: 260, marginRight: 20 }}
        >
          <Image
            style={{
              position: "relative",
              marginHorizontal: 30,
              width: 100,
              height: 100,
              borderRadius: 70,
            }}
            source={require("../../../../assets/Icons/ferr.jpg")}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginHorizontal: 30,
              color: "white",
            }}
          ></Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: "80%", alignItems: "center" }}>
        <Button text="Retour" onPress={onReturnPressed} />
      </View>
    </ScrollView>
  );
};

export default CarsScreen;
