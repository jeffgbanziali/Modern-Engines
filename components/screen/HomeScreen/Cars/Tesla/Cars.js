import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./Styles";

const Cars = (props) => {
  const { name, tagline, taglineCTA, image, model, color } = props.car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={{ fontSize: 20, color: "black" }}>{model}</Text>
        <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        <Text style={styles.subtitle}>{tagline}</Text>

        <Text style={{ fontSize: 20, color: "#5c5e62" }}>{color}</Text>
        <View></View>
      </View>
    </View>
  );
};

export default Cars;
