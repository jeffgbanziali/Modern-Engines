import * as React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  const onCarsPressed = () => {
    navigation.navigate("Cars");
  };
  return (
    <ScrollView style={{ backgroundColor: "#2D55A2" }}>
      <View style={{ alignItems: "center", marginTop: 50, marginBottom: -100 }}>
        <Text style={{ fontSize: 40, color: "white" }}>Menu</Text>
      </View>
      <View style={{ spaceBetween: 20 }}>
        <TouchableOpacity style={{ marginTop: "40%" }} onPress={onCarsPressed}>
          <Image
            style={{
              position: "relative",

              marginHorizontal: 30,
              width: 90,
              height: 90,
              borderRadius: 50,
            }}
            source={require("../../../assets/Image/icon-voiture-lrg.png")}
          />
          <Text
            style={{
              alignItems: "flex-start",
              fontSize: 20,
              fontWeight: "bold",
              marginHorizontal: 40,
              color: "white",
            }}
          >
            Voitures
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: "-29%", marginLeft: 130 }}>
          <Image
            style={{
              position: "relative",
              marginHorizontal: 30,
              width: 90,
              height: 90,
              borderRadius: 50,
            }}
            source={require("../../../assets/Image/images.png")}
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
              borderRadius: 50,
            }}
            source={require("../../../assets/Image/téléchargement.png")}
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
              borderRadius: 50,
            }}
            source={require("../../../assets/Image/téléchargement.png")}
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
              borderRadius: 50,
            }}
            source={require("../../../assets/Image/téléchargement.png")}
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
          style={{
            marginTop: "-29%",
            marginLeft: 260,
            marginRight: 20,
          }}
        >
          <Image
            style={{
              position: "relative",
              marginHorizontal: 30,
              width: 90,
              height: 90,
              borderRadius: 50,
            }}
            source={require("../../../assets/Image/téléchargement.png")}
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
}
