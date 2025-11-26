import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function ModelDetailScreen({ route }) {
    const { model } = route.params;
    const navigation = useNavigation();
    const [imageLoading, setImageLoading] = useState(true);
    const [imageError, setImageError] = useState(false);

    return (
        <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
            <ScrollView contentContainerStyle={styles.content}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                    activeOpacity={0.8}
                >
                    <Text style={styles.backButtonText}>← Back</Text>
                </TouchableOpacity>

                <View style={styles.imageContainer}>
                    {imageLoading && (
                        <View style={styles.imagePlaceholder}>
                            <ActivityIndicator size="large" color="#C5A572" />
                        </View>
                    )}
                    {!imageError ? (
                        <Image
                            source={{ uri: model.image }}
                            style={styles.image}
                            resizeMode="cover"
                            onLoadStart={() => setImageLoading(true)}
                            onLoadEnd={() => setImageLoading(false)}
                            onError={() => {
                                setImageError(true);
                                setImageLoading(false);
                            }}
                        />
                    ) : (
                        <View style={styles.imagePlaceholder}>
                            <Text style={styles.imageErrorText}>Image unavailable</Text>
                        </View>
                    )}
                </View>

                <View style={styles.details}>
                    <Text style={styles.name}>{model.name}</Text>
                    <Text style={styles.price}>{model.price}</Text>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Overview</Text>
                        <Text style={styles.description}>{model.description}</Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Specifications</Text>
                        <View style={styles.specsContainer}>
                            <View style={styles.specRow}>
                                <Text style={styles.specLabel}>Engine</Text>
                                <Text style={styles.specValue}>{model.specs.engine}</Text>
                            </View>
                            <View style={styles.specRow}>
                                <Text style={styles.specLabel}>Horsepower</Text>
                                <Text style={styles.specValue}>{model.specs.horsepower}</Text>
                            </View>
                            <View style={styles.specRow}>
                                <Text style={styles.specLabel}>Torque</Text>
                                <Text style={styles.specValue}>{model.specs.torque}</Text>
                            </View>
                            <View style={styles.specRow}>
                                <Text style={styles.specLabel}>Top Speed</Text>
                                <Text style={styles.specValue}>{model.specs.topSpeed}</Text>
                            </View>
                            <View style={styles.specRow}>
                                <Text style={styles.specLabel}>Acceleration</Text>
                                <Text style={styles.specValue}>{model.specs.acceleration}</Text>
                            </View>
                            <View style={styles.specRow}>
                                <Text style={styles.specLabel}>Transmission</Text>
                                <Text style={styles.specValue}>{model.specs.transmission}</Text>
                            </View>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.ctaButton} activeOpacity={0.9}>
                        <Text style={styles.ctaButtonText}>Book a Test Drive</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0B0B0D',
    },
    content: {
        paddingBottom: 120,
    },
    backButton: {
        padding: 20,
        paddingTop: 8,
    },
    backButtonText: {
        color: '#C5A572',
        fontSize: 16,
        fontWeight: '600',
    },
    imageContainer: {
        width: '100%',
        height: 300,
        backgroundColor: '#111114',
        position: 'relative',
    },
    image: {
        width: '100%',
        height: 300,
    },
    imagePlaceholder: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#111114',
    },
    imageErrorText: {
        color: '#C6C6CC',
        fontSize: 16,
    },
    details: {
        padding: 20,
        gap: 24,
    },
    name: {
        color: '#FFFFFF',
        fontSize: 32,
        fontWeight: '700',
        letterSpacing: 0.5,
    },
    price: {
        color: '#C5A572',
        fontSize: 24,
        fontWeight: '600',
        marginTop: 4,
    },
    section: {
        gap: 12,
    },
    sectionTitle: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 4,
    },
    description: {
        color: '#C6C6CC',
        lineHeight: 24,
        fontSize: 16,
    },
    specsContainer: {
        backgroundColor: '#111114',
        borderRadius: 12,
        padding: 16,
        gap: 16,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.08)',
    },
    specRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.05)',
    },
    specLabel: {
        color: '#C6C6CC',
        fontSize: 15,
    },
    specValue: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '600',
    },
    ctaButton: {
        backgroundColor: '#C5A572',
        borderRadius: 12,
        paddingVertical: 18,
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 16,
    },
    ctaButtonText: {
        color: '#0B0B0D',
        fontSize: 18,
        fontWeight: '700',
        letterSpacing: 0.5,
    },
});

