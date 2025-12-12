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
                style={styles.logo}
                resizeMode="contain"
            />

            {/* Container geral dos inputs */}
            <View style={styles.inputsWrapper}>

                {/* INPUT 1 */}
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

                {/* INPUT 2 */}
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

            </View>

            {/* Botão */}
            <TouchableOpacity onPress={() => ('')}>
                <LinearGradient
                    colors={['#2FDAFF', '#0E33F3']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>LOGIN</Text>
                </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forgotPasswordButton} onPress={() => ('')}>
                <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
            </TouchableOpacity>

            <Text style={styles.orText}>Ou</Text>

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

    logo: {
        marginTop: 20,
        marginBottom: 52,
    },

    /** View geral que segura TODAS as caixas */
    inputsWrapper: {
        gap: 20,
    },

    /** Cada caixa individual */
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
        gap: 8,
    },

    icon: {
        width: 20,
        height: 20,
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

    forgotPasswordButton: {
        alignItems: 'center',
        width: 327,
        height: 40,
        paddingTop: 24,
    },

    forgotPasswordText: {
        color: '#6B7580',
        fontSize: 14,
        fontFamily: 'Inter_Semibold',
        textAlign: 'center',
    },

    orText: {
        marginTop: 16,
        fontSize: 14,
    },
});