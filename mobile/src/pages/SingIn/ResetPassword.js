import React from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";

function RuleItem({ text, valid }) {
  return (
    <View style={styles.ruleItem}>
      <View
        style={[
          styles.circle,
          valid ? styles.circleValid : styles.circleInvalid,
        ]}
      />
      <Text style={valid ? styles.ruleTextValid : styles.ruleTextInvalid}>
        {text}
      </Text>
    </View>
  );
}

export default function ResetPassword() {
    const navigation = useNavigation();

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const passwordRules = {
        minLength: password.length >= 8,
        hasNumberOrSymbol: /[\d\W]/.test(password),
        noUsername: username
            ? !password.toLowerCase().includes(username.toLowerCase())
            : true,
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Login')}>    
                <Image
                    source={require("../../assets/button_voltar.png")}
                />
            </TouchableOpacity>

            <View style={styles.content}>
                <Text style={styles.title}>Crie sua nova senha</Text>
                <Text style={styles.subtitle}>Sua nova senha deve ser diferente da senha anterior.</Text>
            </View>

            <View style={styles.inputsWrapper}>
                <View style={styles.inputContainer}>
                    <Image
                        source={require("../../assets/lock.png")}
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
            
            </View>

            <View style={styles.rulesContainer}>
                <RuleItem
                    text="Não deve conter seu nome de usuário"
                    valid={passwordRules.noUsername} />
                <RuleItem
                    text="Pelo menos 8 caracteres"
                    valid={passwordRules.minLength} />
                <RuleItem
                    text="Contém número ou símbolo"
                    valid={passwordRules.hasNumberOrSymbol} />
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('ResetPasswordSuccessfully')}>
                <LinearGradient
                    colors={['#2FDAFF', '#0E33F3']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Redefinir senha</Text>
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

    backButton: {
        width: 32,
        height: 32,
        position: "absolute",
        top: 30,
        left: 16,
    },

    content: {
        marginTop: 128,
        alignItems: "center",
        fontFamily: 'Inter_600SemiBold',
        width: 327,
        gap: 12,
    },

    title: {
        fontSize: 36,
        color: "#242D35",
        fontFamily: 'Inter_600SemiBold',
    },

    subtitle: {
        fontSize: 16,
        color: "#9BA1A8",
    },

    inputsWrapper: {
        gap: 16,
        marginTop: 48
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

    rulesContainer: {
        marginTop: 24,
        width: 327,
        height: 96,
        gap: 12,
    },

    ruleItem: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 6,
    },

    circle: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginRight: 8,
    },

    circleValid: {
        backgroundColor: "#3B82F6",
    },

    circleInvalid: {
        backgroundColor: "#C4C4C4",
    },

    ruleTextValid: {
        color: "#3B82F6",
        fontSize: 12,
    },

    ruleTextInvalid: {
        color: "#999",
        fontSize: 12,
    },

    button: {
        width: 327,
        paddingVertical: 12,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 152,
    },

    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Inter_600SemiBold',
    },
});