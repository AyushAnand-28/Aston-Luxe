import React, { useState, useEffect } from 'react';
import {
    Modal,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Alert,
} from 'react-native';

const initialForm = {
    fullName: '',
    email: '',
    phone: '',
    city: '',
    notes: '',
};

export default function BookingFormModal({ visible, onClose, modelName }) {
    const [form, setForm] = useState(initialForm);

    useEffect(() => {
        if (!visible) {
            setForm(initialForm);
        }
    }, [visible]);

    const handleChange = (key, value) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };

    const handleSubmit = () => {
        if (!form.fullName.trim() || !form.email.trim() || !form.phone.trim()) {
            Alert.alert('Missing details', 'Please fill in your name, email, and phone number.');
            return;
        }

        Alert.alert(
            'Request received',
            `Thank you${form.fullName ? `, ${form.fullName}` : ''
            }! Our concierge team will reach out shortly to schedule your Aston Martin experience.`,
        );
        onClose?.();
    };

    return (
        <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose}>
            <View style={styles.overlay}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                    style={styles.keyboard}
                >
                    <View style={styles.card}>
                        <View style={styles.header}>
                            <Text style={styles.heading}>Book a Test Drive</Text>
                            {modelName ? <Text style={styles.subHeading}>{modelName}</Text> : null}
                        </View>

                        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.form}>
                            <View>
                                <Text style={styles.label}>Full Name</Text>
                                <TextInput
                                    value={form.fullName}
                                    onChangeText={(value) => handleChange('fullName', value)}
                                    placeholder="Enter your name"
                                    placeholderTextColor="#6F6F74"
                                    style={styles.input}
                                />
                            </View>

                            <View>
                                <Text style={styles.label}>Email</Text>
                                <TextInput
                                    value={form.email}
                                    onChangeText={(value) => handleChange('email', value)}
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    placeholder="you@example.com"
                                    placeholderTextColor="#6F6F74"
                                    style={styles.input}
                                />
                            </View>

                            <View>
                                <Text style={styles.label}>Phone</Text>
                                <TextInput
                                    value={form.phone}
                                    onChangeText={(value) => handleChange('phone', value)}
                                    keyboardType="phone-pad"
                                    placeholder="+91 98765 43210"
                                    placeholderTextColor="#6F6F74"
                                    style={styles.input}
                                />
                            </View>

                            <View>
                                <Text style={styles.label}>Preferred City</Text>
                                <TextInput
                                    value={form.city}
                                    onChangeText={(value) => handleChange('city', value)}
                                    placeholder="Delhi, Mumbai, Bengaluru..."
                                    placeholderTextColor="#6F6F74"
                                    style={styles.input}
                                />
                            </View>

                            <View>
                                <Text style={styles.label}>Notes (optional)</Text>
                                <TextInput
                                    value={form.notes}
                                    onChangeText={(value) => handleChange('notes', value)}
                                    placeholder="Anything else we should know?"
                                    placeholderTextColor="#6F6F74"
                                    style={[styles.input, styles.notesInput]}
                                    multiline
                                />
                            </View>
                        </ScrollView>

                        <View style={styles.actions}>
                            <TouchableOpacity style={styles.cancelButton} onPress={onClose} activeOpacity={0.8}>
                                <Text style={styles.cancelText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit} activeOpacity={0.9}>
                                <Text style={styles.submitText}>Submit Request</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
        justifyContent: 'center',
        padding: 20,
    },
    keyboard: {
        flex: 1,
        justifyContent: 'center',
    },
    card: {
        backgroundColor: '#111114',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.08)',
        padding: 20,
        gap: 16,
        maxHeight: '90%',
    },
    header: {
        gap: 4,
    },
    heading: {
        color: '#FFFFFF',
        fontSize: 22,
        fontWeight: '700',
    },
    subHeading: {
        color: '#C5A572',
        fontSize: 16,
        fontWeight: '600',
    },
    form: {
        gap: 16,
        paddingVertical: 8,
    },
    label: {
        color: '#C6C6CC',
        marginBottom: 6,
    },
    input: {
        backgroundColor: '#1A1A1F',
        borderRadius: 12,
        padding: 14,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.06)',
        color: '#FFFFFF',
    },
    notesInput: {
        minHeight: 90,
        textAlignVertical: 'top',
    },
    actions: {
        flexDirection: 'row',
        gap: 12,
    },
    cancelButton: {
        flex: 1,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#3A3A40',
        paddingVertical: 16,
        alignItems: 'center',
    },
    cancelText: {
        color: '#C6C6CC',
        fontWeight: '600',
    },
    submitButton: {
        flex: 1,
        borderRadius: 12,
        backgroundColor: '#C5A572',
        paddingVertical: 16,
        alignItems: 'center',
    },
    submitText: {
        color: '#0B0B0D',
        fontWeight: '700',
        letterSpacing: 0.5,
    },
});


