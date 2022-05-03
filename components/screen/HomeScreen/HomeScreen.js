import * as React from "react";
import { View, Text, ScrollView, Image } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={{ alignItems: "center", marginTop: 50, marginBottom: -100 }}>
        <Text style={{ fontSize: 40 }}>Menu</Text>
      </View>

      <View
        style={{ alignItems: "flex-start", display: "flex", marginTop: 200 }}
      >
        <Image
          style={{
            position: "relative",

            marginHorizontal: 30,
            width: 90,
            height: 90,
          }}
          source={require("../../../assets/Image/icon-voiture-lrg.png")}
        />
        <Text
          style={{
            alignItems: "flex-start",
            fontSize: 20,
            fontWeight: "bold",
            marginHorizontal: 30,
          }}
        >
          Voitures
        </Text>
      </View>
      <View style={{ alignItems: "center", marginTop: -120 }}>
        <Image
          style={{
            position: "relative",
            marginHorizontal: 30,
            width: 90,
            height: 90,
          }}
          source={require("../../../assets/Image/images.png")}
        />
        <Text
          style={{
            alignItems: "flex-start",
            fontSize: 20,
            fontWeight: "bold",
            marginHorizontal: 30,
          }}
        >
          Bateaux
        </Text>
      </View>
      <View style={{ alignItems: "flex-end", marginTop: -120 }}>
        <Image
          style={{
            position: "relative",

            marginHorizontal: 30,
            width: 90,
            height: 90,
          }}
          source={require("../../../assets/Image/téléchargement.png")}
        />
        <Text
          style={{
            alignItems: "flex-start",
            fontSize: 20,
            fontWeight: "bold",
            marginHorizontal: 30,
          }}
        >
          Avions
        </Text>
      </View>

      <View style={{ alignItems: "flex-start", marginTop: 20 }}>
        <Image
          style={{
            position: "relative",
            marginHorizontal: 30,
            width: 90,
            height: 90,
          }}
          source={require("../../../assets/Image/icon-voiture-lrg.png")}
        />
        <Text
          style={{
            alignItems: "flex-start",
            fontSize: 20,
            fontWeight: "bold",
            marginHorizontal: 30,
          }}
        >
          Voitures
        </Text>
      </View>
      <View style={{ alignItems: "flex-end", marginTop: -120 }}>
        <Image
          style={{
            position: "relative",

            marginHorizontal: 30,
            width: 90,
            height: 90,
          }}
          source={require("../../../assets/Image/icon-voiture-lrg.png")}
        />
        <Text
          style={{
            alignItems: "flex-start",
            fontSize: 20,
            fontWeight: "bold",
            marginHorizontal: 30,
          }}
        >
          Voitures
        </Text>
      </View>
      <View style={{ alignItems: "center", marginTop: -120 }}>
        <Image
          style={{
            position: "relative",
            marginHorizontal: 30,
            width: 90,
            height: 90,
          }}
          source={require("../../../assets/Image/icon-voiture-lrg.png")}
        />
        <Text
          style={{
            alignItems: "flex-start",
            fontSize: 20,
            fontWeight: "bold",
            marginHorizontal: 30,
          }}
        >
          Voitures
        </Text>
      </View>
    </ScrollView>
  );
}
