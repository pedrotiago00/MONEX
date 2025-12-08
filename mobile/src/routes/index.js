// importando dependências
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// importando páginas
import Welcome from "../pages/Welcome/index.js";

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
        </Stack.Navigator>
    );
}