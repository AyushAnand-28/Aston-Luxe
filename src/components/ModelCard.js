import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ModelCard({ model }) {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('ModelDetail', { model });
    };

    return (
        <TouchableOpacity 
            style={styles.card} 
            onPress={handlePress}
            activeOpacity={0.8}
        >
            <Image source={{ uri: model.image }} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.name}>{model.name}</Text>
                <Text style={styles.price}>{model.price}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#16161A',
        borderRadius: 16,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.08)',
    },
    image: {
        width: '100%',
        height: 140,
    },
    content: {
        padding: 12,
    },
    name: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '600',
    },
    price: {
        color: '#C5A572',
        marginTop: 4,
    },
});

