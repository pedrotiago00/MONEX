import React from "react";
import { View, StyleSheet, Image } from "react-native";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
});