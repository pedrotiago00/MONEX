import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Overview() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Visão Geral</Text>
            </View>
            <View style={styles.content}>
                <View>
                    <Text>Conteúdo da Visão Geral</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});