import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';


export default function AboutScreen() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            <Text style={styles.title}>A Heritage of Excellence</Text>
            <Text style={styles.body}>
                Since 1913, Aston Martin has crafted some of the world’s most iconic grand tourers
                and performance cars. With a blend of British craftsmanship, cutting-edge engineering,
                and a relentless pursuit of beauty, Aston Martin continues to define modern luxury.
            </Text>
            <Text style={styles.body}>
                Every model is a statement of intent: powerful, poised, and exquisitely designed.
                From sculpted silhouettes to meticulously curated interiors, Aston Martin embodies
                a philosophy where performance meets elegance.
            </Text>
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
        gap: 16,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: '700',
    },
    body: {
        color: '#C6C6CC',
        lineHeight: 22,
    },
});

