// importando dependências
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// importando fontes
import { Inter_400Regular, Inter_600SemiBold, useFonts } from '@expo-google-fonts/inter';

// importando rotas
import Routes from './src/routes/index.js';

// componente principal
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#0E33F3" // cor do topo (exemplo do seu Figma)
      />
      <Routes />
    </NavigationContainer>
  );
}