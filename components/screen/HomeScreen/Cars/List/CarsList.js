import { View, Text, FlatList } from "react-native";
import React from "react";
import Styles from "./Styles";
import Cars from "../Tesla/Cars";
import Lists from "./Lists";

const CarsList = () => {
  return (
    <View style={Styles.container}>
      <FlatList data={Lists} renderItem={({ item }) => <Cars car={item} />} />
    </View>
  );
};

export default CarsList;
