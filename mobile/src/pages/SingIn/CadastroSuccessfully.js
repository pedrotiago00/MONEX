import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";

export default function CadastroSuccessfully() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Login')}>
                <Image source={require("../../assets/button_voltar.png")} />
            </TouchableOpacity>

            <View style={styles.logoContainer}>
                <Image source={require("../../assets/Illustration_Successfully.png")} />
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>Cadastro realizado com sucesso!</Text>
                <Text style={styles.subtitle}>Pronto para usar o MONEX!</Text>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <LinearGradient
                    colors={['#2FDAFF', '#0E33F3']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Voltar ao login</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },

    logoContainer: {
        marginTop: 265,
    },

    backButton: {
        width: 32,
        height: 32,
        position: "absolute",
        top: 30,
        left: 16,
    },

    content: {
        marginTop: 32,
        gap: 8,
    },

    title: {
        fontSize: 24,
        color: "#242D35",
        fontFamily: 'Inter_600SemiBold',
        textAlign: "center",
    },

    subtitle: {
        fontSize: 16,
        fontFamily: 'Inter_400Regular',
        color: "#9BA1A8",
        textAlign: "center",
    },

    button: {
        width: 327,
        paddingVertical: 12,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 201,
    },

    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Inter_600SemiBold',
    },
});