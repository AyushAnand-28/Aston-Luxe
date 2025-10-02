import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';


export default function ContactScreen() {
    const onBook = () => {
        Alert.alert('Test Drive', 'Your request has been received. We will contact you shortly.');
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Aston Luxe Showroom</Text>
                <Text style={styles.item}>123 Park Lane, London</Text>
                <Text style={styles.item}>+44 20 7946 0958</Text>
                <Text style={styles.item}>luxury@astonluxe.example</Text>

                <TouchableOpacity style={styles.button} onPress={onBook} activeOpacity={0.9}>
                    <Text style={styles.buttonText}>Book a Test Drive</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#0B0B0D',
        padding: 20,
    },
    card: {
        backgroundColor: '#111114',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        padding: 20,
        gap: 12,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 10,
    },
    item: {
        color: '#C6C6CC',
    },
    button: {
        marginTop: 20,
        backgroundColor: '#C5A572',
        borderRadius: 12,
        paddingVertical: 16,
        alignItems: 'center',
    },
    buttonText: {
        color: '#0B0B0D',
        fontWeight: '700',
        letterSpacing: 0.5,
    },
});

