// importando bibliotecas e componentes
import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, Dimensions, FlatList } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

// conteudo dos slides
const slides = [
    {
        id: '1',
        title: 'Anote suas Despesas',
        description: 'Anote diariamente seus gastos para ajudar a administrar seu dinheiro.',
        image: require('../../assets/illustration_1.png'),
    },

    {
        id: '2',
        title: 'Gerenciamento de dinheiro simples',
        description: 'Receba notificações ou alertas quando seus gastos ultrapassarem o limite.',
        image: require('../../assets/illustration_2.png'),
    },

    {
        id: '3',
        title: 'Fácil de rastrear e analisar',
        description: 'Controlar seus gastos ajuda a garantir que você não gaste mais do que o planejado.',
        image: require('../../assets/illustration_3.png'),
    }
]

export default function Welcome_2() {
    // contador para o FlatList
    const flatListRef = useRef(null);
    const [index, setIndex] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
      let next = index + 1;

      if (next === slides.length) next = 0;

      flatListRef.current?.scrollToIndex({ index: next, animated: true });
      setIndex(next);
    }, 3000);

    return () => clearInterval(interval);
    }, [index]);

  return (
    <View style={styles.container}>
        <Image 
            source={require("../../assets/logo_horizontal.png")}
            style={styles.logoContainer}
            resizeMode="contain"
        />

        {/* Implementação do carrossel com FlatList */}
        <FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ width, alignItems: "center", paddingHorizontal: 20 }}>
            
            <Image source={item.image} style={{ width: 280, height: 280, resizeMode: "contain" }} />

            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
        />

        <TouchableOpacity style={styles.button} onPress={() => {}}>
            <LinearGradient
                colors={['#2FDAFF', '#0E33F3']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Let’s Go</Text>
            </LinearGradient>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
    },

    logoContainer: {
        width: 180,
        height: 180,
    },
    
    title: {
        color: "#242D35",
        textAlign: "center",
        fontFamily: "Inter_600SemiBold",
        fontSize: 18,
    },

    description: {
        color: "#6B7580",
        textAlign: "center",
        fontFamily: "Inter_400Regular",
        fontSize: 16,
    },

    button: {
        height: 48,
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },

    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Inter_600SemiBold',
    },
});