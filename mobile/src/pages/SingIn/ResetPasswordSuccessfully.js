import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ResetPasswordSuccessfully() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Senha redefinida com sucesso!</Text>
            <Text style={styles.subtitle}>Você já pode usar sua nova senha para fazer login.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
});