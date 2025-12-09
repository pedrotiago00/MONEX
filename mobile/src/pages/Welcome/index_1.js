import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { useEffect } from "react";

import { StatusBar } from 'expo-status-bar';

export default function Welcome_1( { navigation } ) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Welcome_2");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#0E33F3" translucent={false} />
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