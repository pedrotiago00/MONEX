// importando dependências
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

// importando rotas
import Routes from './src/routes/index.js';

// componente principal
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='light' />
      <Routes />
    </NavigationContainer>
  );
}