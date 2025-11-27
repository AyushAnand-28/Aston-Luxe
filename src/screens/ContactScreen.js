import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BookingFormModal from '../components/BookingFormModal';


export default function ContactScreen() {
    const [formVisible, setFormVisible] = useState(false);

    const openDelhiShowroomMap = () => {
        Linking.openURL('https://www.google.com/maps/search/?api=1&query=Aston+Martin+New+Delhi+A16+Mohan+Co-operative+Industrial+Estate+Mathura+Road+New+Delhi+110044');
    };

    const openMumbaiShowroomMap = () => {
        Linking.openURL('https://www.google.com/maps/search/?api=1&query=Aston+Martin+Mumbai+Crystal+Building+Altamount+Road+Mumbai');
    };

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>India Showroom</Text>

                    <View style={styles.subCard}>
                        <Text style={styles.city}>New Delhi</Text>
                        <Text style={styles.item}>Aston Martin New Delhi</Text>
                        <Text style={styles.item}>A16, Mohan Co-operative Industrial Estate</Text>
                        <Text style={styles.item}>Mathura Road, New Delhi 110044, India</Text>
                        <Text style={styles.item}>Phone: +91 11 4107 2007</Text>
                        <Text style={styles.item}>Mobile: +91 99535 52288</Text>
                        <Text style={styles.item}>Email: connect@astonmartinnewdelhi.com</Text>
                        <Text style={styles.item}>Mon–Sat: 10:00 AM – 6:30 PM · Sunday Closed</Text>
                        <TouchableOpacity onPress={openDelhiShowroomMap} activeOpacity={0.8}>
                            <Text style={styles.mapLink}>View on Map</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.subCard}>
                        <Text style={styles.city}>Mumbai (Former Showroom)</Text>
                        <Text style={styles.item}>Aston Martin Mumbai (Closed)</Text>
                        <Text style={styles.item}>Crystal Building, Altamount Road</Text>
                        <Text style={styles.item}>Mumbai, Maharashtra, India</Text>
                        <Text style={styles.item}>Note: This showroom has closed. Please contact Aston Martin New Delhi for official sales and service in India.</Text>
                        <TouchableOpacity onPress={openMumbaiShowroomMap} activeOpacity={0.8}>
                            <Text style={styles.mapLink}>View on Map</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View >
                    <TouchableOpacity style={styles.button} onPress={() => setFormVisible(true)} activeOpacity={0.9}>
                        <Text style={styles.buttonText}>Book a Test Drive</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <BookingFormModal visible={formVisible} onClose={() => setFormVisible(false)} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0B0B0D',
        padding: 20,
    },
    scrollContent: {
        paddingBottom: 40,
        gap: 24,
    },
    card: {
        backgroundColor: '#111114',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        padding: 20,
        gap: 12,
    },
    section: {
        gap: 16,
    },
    sectionTitle: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 4,
    },
    subCard: {
        backgroundColor: '#111114',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#3A3A40',
        padding: 16,
        gap: 6,
    },
    city: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4,
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
    mapLink: {
        marginTop: 8,
        color: '#C5A572',
        fontWeight: '600',
        letterSpacing: 0.3,
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

