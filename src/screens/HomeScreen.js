import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import HeroBanner from '../components/HeroBanner';


export default function HomeScreen() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            <View>
                <HeroBanner />
            </View>
            <View style={styles.copy}>
                <Text style={styles.heading}>Welcome to Aston Luxe</Text>
                <Text style={styles.subcopy}>
                    Explore the world of Aston Martin — where engineering excellence meets timeless elegance.
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0B0B0D',
    },
    content: {
        padding: 20,
        paddingTop: 36,
        gap: 28,
    },
    copy: {
        gap: 10,
    },
    heading: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: '700',
    },
    subcopy: {
        color: '#C6C6CC',
        lineHeight: 22,
    },
});

