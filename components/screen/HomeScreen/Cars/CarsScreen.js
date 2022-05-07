import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CarsScreen = () => {
  const navigation = useNavigation();
  const onTeslaPressed = () => {
    navigation.navigate("Tesla");
  };
  return (
    <ScrollView style={{ backgroundColor: "#3C0A0A" }}>
      <View style={{ alignItems: "center", marginTop: 50, marginBottom: -100 }}>
        <Text style={{ fontSize: 40, color: "white" }}>Voitures</Text>
      </View>
      <View style={{ spaceBetween: 20 }}>
        <TouchableOpacity style={{ marginTop: "40%" }} onPress={onTeslaPressed}>
          <Image
            style={{
              position: "relative",
              marginHorizontal: 30,
              width: 90,
              height: 90,
            }}
            source={require("../../../../assets/Image/icon-voiture-lrg.png")}
          />
          <Text
            style={{
              alignItems: "flex-start",
              fontSize: 20,
              fontWeight: "bold",
              marginHorizontal: 50,
              color: "white",
            }}
          >
            Tesla
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: "-29%", marginLeft: 130 }}>
          <Image
            style={{
              position: "relative",
              marginHorizontal: 30,
              width: 90,
              height: 90,
            }}
            source={require("../../../../assets/Image/images.png")}
          />
          <Text
            style={{
              alignContent: "center",
              fontSize: 20,
              fontWeight: "bold",
              marginHorizontal: 35,
              color: "white",
            }}
          >
            Bateaux
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: "-29%", marginLeft: 260, marginRight: 20 }}
        >
          <Image
            style={{
              position: "relative",
              marginHorizontal: 30,
              width: 90,
              height: 90,
            }}
            source={require("../../../../assets/Image/téléchargement.png")}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginHorizontal: 30,
              color: "white",
            }}
          >
            Avions
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: "10%" }}>
          <Image
            style={{
              position: "relative",
              marginHorizontal: 30,
              width: 90,
              height: 90,
            }}
            source={require("../../../../assets/Image/téléchargement.png")}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginHorizontal: 40,
              color: "white",
            }}
          >
            Avions
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: "-29%", marginLeft: 130 }}>
          <Image
            style={{
              position: "relative",
              marginHorizontal: 30,
              width: 90,
              height: 90,
            }}
            source={require("../../../../assets/Image/téléchargement.png")}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginHorizontal: 40,
              color: "white",
            }}
          >
            Avions
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: "-29%", marginLeft: 260, marginRight: 20 }}
        >
          <Image
            style={{
              position: "relative",
              marginHorizontal: 30,
              width: 90,
              height: 90,
            }}
            source={require("../../../../assets/Image/téléchargement.png")}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginHorizontal: 30,
              color: "white",
            }}
          >
            Avions
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CarsScreen;
