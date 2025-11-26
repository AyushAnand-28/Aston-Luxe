import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.78;

export default function FeaturedCarousel({ models }) {
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <TouchableOpacity
            activeOpacity={0.85}
            onPress={() =>
                navigation.navigate('Models', {
                    screen: 'ModelDetail',
                    params: { model: item },
                })
            }
            style={styles.card}
        >
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.cardContent}>
                <Text style={styles.modelName}>{item.name}</Text>
                <Text style={styles.modelPrice}>{item.price}</Text>
                <Text numberOfLines={2} style={styles.modelDescription}>
                    {item.description}
                </Text>
                <View style={styles.ctaRow}>
                    <Text style={styles.ctaText}>View details</Text>
                    <Text style={styles.ctaArrow}>→</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={models}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={{ paddingHorizontal: 4 }}
                snapToAlignment="start"
                snapToInterval={CARD_WIDTH + 16}
                decelerationRate="fast"
                ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 4,
    },
    card: {
        width: CARD_WIDTH,
        borderRadius: 20,
        backgroundColor: '#111114',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.08)',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 180,
    },
    cardContent: {
        padding: 16,
        gap: 8,
    },
    modelName: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '700',
        letterSpacing: 0.3,
    },
    modelPrice: {
        color: '#C5A572',
        fontWeight: '600',
    },
    modelDescription: {
        color: '#C6C6CC',
        fontSize: 13,
        lineHeight: 18,
    },
    ctaRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        marginTop: 4,
    },
    ctaText: {
        color: '#C5A572',
        fontWeight: '600',
        letterSpacing: 0.4,
    },
    ctaArrow: {
        color: '#C5A572',
        fontSize: 18,
    },
});


