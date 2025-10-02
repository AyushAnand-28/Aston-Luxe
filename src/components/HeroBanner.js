import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function HeroBanner() {
    return (
        <View style={styles.container}>
            <View style={styles.logoWrap}>
                <Image
                    source={{ uri: 'https://wallpaperbat.com/img/134250-aston-martin-logo-wallpaper-top-free-aston-martin-logo.jpg' }}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>
            <Text style={styles.title}>Aston Luxe</Text>
            <Text style={styles.subtitle}>Power. Poise. Purity.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#111114',
        borderRadius: 20,
        paddingVertical: 32,
        paddingHorizontal: 18,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        alignItems: 'center',
    },
    logoWrap: {
        width: 120,
        height: 60,
        marginBottom: 16,
    },
    logo: {
        width: '100%',
        height: '100%',
    },
    title: {
        color: '#FFFFFF',
        fontSize: 28,
        marginTop: 8,
        fontWeight: '700',
        letterSpacing: 1,
    },
    subtitle: {
        color: '#C5A572',
        fontSize: 20,
        marginTop: 4,
        letterSpacing: 0.5,
    },
});

