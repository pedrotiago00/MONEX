// importando dependências
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// importando páginas
import Welcome from "../pages/Welcome/Welcome.js";
import Carrossel from "../pages/Welcome/Carrossel.js";
import Login from "../pages/SingIn/Login.js";
import Cadastro from "../pages/SingIn/Cadastro.js";

// criando stack de navegação
const Stack = createNativeStackNavigator();

// definindo rotas
export default function Routes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* Tela de boas-vindas */}
            <Stack.Screen
            name="Welcome" 
            component={Welcome} />
            
            {/* Carrossel da tela de boas-vindas */}
            <Stack.Screen
            name="Carrossel" 
            component={Carrossel} />

            <Stack.Screen
            name="Login"
            component={Login}
            />

            {/* Tela de cadastro */}
            <Stack.Screen
            name="Cadastro"
            component={Cadastro}
            />
        </Stack.Navigator>
    );
}