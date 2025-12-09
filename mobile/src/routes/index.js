// importando dependências
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// importando páginas
import Welcome_1 from "../pages/Welcome/index_1.js";
import Welcome_2 from "../pages/Welcome/index_2.js";

// criando stack de navegação
const Stack = createNativeStackNavigator();

// definindo rotas
export default function Routes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* Tela de boas-vindas */}
            <Stack.Screen
            name="Welcome_1" 
            component={Welcome_1} />
            
            {/* Segunda tela de boas-vindas */}
            <Stack.Screen
            name="Welcome_2" 
            component={Welcome_2} />
        </Stack.Navigator>
    );
}