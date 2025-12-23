import React from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";

export default function Login() {
    const navigation = useNavigation();
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const API_URL = "http://192.168.1.115:3000";

    const handleSubmit = async () => {
        const response = await axios.post(`${API_URL}/api/login`, {
            email,
            password
        })
    };

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
                <View style={styles.inputContainer} onSubmit={handleSubmit}>
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

            <TouchableOpacity style={styles.forgotPasswordButton} onPress={() => navigation.navigate('ResetPassword')}>
                <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
            </TouchableOpacity>

            <Text style={styles.orText}>Ou</Text>

            <View style={styles.socialLoginButtons}>
                <TouchableOpacity style={styles.socialButton} onPress={() => ('')}>
                    <Image style={styles.socialIcon} source={require("../../assets/google.png")}></Image>
                    <Text style={styles.socialButtonText}>Login com o Google</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.socialButton} onPress={() => ('')}>
                    <Image style={styles.socialIcon} source={require("../../assets/apple.png")}></Image>
                    <Text style={styles.socialButtonText}>Login com a Apple</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.registerButton}>
                <Text style={styles.registerButtonText}>Não tem uma conta?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={styles.registerButtonTextInside}> Cadastre-se aqui.</Text>
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
    },

    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Inter_600SemiBold',
    },

    forgotPasswordButton: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 16,
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
        fontFamily: 'Inter_400Regular',
        color: '#6B7580',
    },

    socialLoginButtons: {
        marginTop: 24,
        width: 327,
        gap: 20,
    },

    socialButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: 327,
        height: 56,
        borderWidth: 1,
        borderColor: "#CED1D6",
        borderRadius: 14,
        backgroundColor: "#FFF",
        gap: 12,
    },

    socialIcon: {
        width: 20,
        height: 20,
        resizeMode: "contain",
    },

    socialButtonText: {
        color: "#000",
        fontSize: 14,
        fontFamily: "Inter_500Medium",
    },

    registerButton: {
        marginTop: 20,
        width: 327,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    registerButtonText: {
        fontSize: 14,
        fontFamily: "Inter_400Regular",
        color: "#242D35",
        textAlign: "center",
    },

    registerButtonTextInside: {
        fontSize: 14,
        fontFamily: "Inter_600SemiBold",
        color: "#0E33F3",
    }
});