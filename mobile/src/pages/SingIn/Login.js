import React from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function Login() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    return (
        <View style={styles.container}>
            {/* Logo */}
            <Image 
                source={require("../../assets/logo_login.png")}
                resizeMode="contain"
            />

            {/* Formulário de login */}
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Image
                        source={require("../../assets/profile.png")}
                        style={styles.icon}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Nome de usuário"
                        placeholderTextColor="#999"
                        value={username}
                        onChangeText={setUsername}
                    />
                </View>


                <View style={styles.inputContainer}>
                    <Image
                        source={require("../../assets/lock.png")}
                        style={styles.icon}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        placeholderTextColor="#999"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                    />
                </View>

                {/* Botão */}
                <TouchableOpacity style={styles.button} onPress={() => ('')}>
                    <LinearGradient
                        colors={['#2FDAFF', '#0E33F3']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
    },
    
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F5F6F7",
        width: 327,
        height: 48,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: "gray",
        paddingHorizontal: 12,
        marginTop: 52,
        gap: 8,
    },

    icon: {
        width: 20,
        height: 20,
        marginRight: 10,
        resizeMode: "contain",
    },

    input: {
        flex: 1,
        fontSize: 14,
        color: "#000",
        fontFamily: 'Inter_400Regular',
    },

    button: {
        width: 327,
        paddingVertical: 12,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24,
        marginBottom: 87,
    },

    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Inter_600SemiBold',
    },
});