import React, { useMemo, useState } from 'react';
import { View, StyleSheet, ScrollView, Text, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { groupModelsByCategory } from '../data/models';
import ModelCard from '../components/ModelCard';

const { width } = Dimensions.get('window');
const horizontalPadding = 20;
const horizontalCardWidth = width * 0.68;
const verticalCardWidth = width - horizontalPadding * 2;

export default function ModelsScreen() {
    const groupedSections = useMemo(() => groupModelsByCategory(), []);
    const categories = useMemo(
        () => ['All', ...groupedSections.map((section) => section.category)],
        [groupedSections]
    );
    const [selectedCategory, setSelectedCategory] = useState('All');

    const isAll = selectedCategory === 'All';
    const visibleSections = isAll
        ? groupedSections
        : groupedSections.filter((section) => section.category === selectedCategory);

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.chipRow}
                >
                    {categories.map((category) => {
                        const isActive = selectedCategory === category;
                        return (
                            <TouchableOpacity
                                key={category}
                                style={[styles.chip, isActive && styles.chipActive]}
                                onPress={() => setSelectedCategory(category)}
                                activeOpacity={0.85}
                            >
                                <Text style={[styles.chipLabel, isActive && styles.chipLabelActive]}>
                                    {category}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>

                {visibleSections.map((section) => (
                    <View key={section.category} style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionEyebrow}>Category</Text>
                            <Text style={styles.sectionTitle}>{section.category}</Text>
                            <Text style={styles.sectionCount}>{section.models.length} models</Text>
                        </View>
                        {isAll ? (
                            <FlatList
                                data={section.models}
                                keyExtractor={(item) => item.id}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
                                contentContainerStyle={{ paddingHorizontal: 4 }}
                                snapToAlignment="start"
                                decelerationRate="fast"
                                renderItem={({ item }) => (
                                    <View style={{ width: horizontalCardWidth }}>
                                        <ModelCard model={item} />
                                    </View>
                                )}
                            />
                        ) : (
                            <View style={styles.verticalList}>
                                {section.models.map((model) => (
                                    <View key={model.id} style={{ width: verticalCardWidth }}>
                                        <ModelCard model={model} />
                                    </View>
                                ))}
                            </View>
                        )}
                    </View>
                ))}
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
        paddingHorizontal: horizontalPadding,
        paddingTop: 20,
        paddingBottom: 40,
        gap: 36,
    },
    chipRow: {
        gap: 12,
        paddingVertical: 4,
    },
    chip: {
        paddingVertical: 8,
        paddingHorizontal: 18,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.15)',
        backgroundColor: 'rgba(255,255,255,0.04)',
    },
    chipActive: {
        backgroundColor: '#C5A572',
        borderColor: '#C5A572',
    },
    chipLabel: {
        color: '#C6C6CC',
        fontWeight: '600',
        letterSpacing: 0.4,
    },
    chipLabelActive: {
        color: '#0B0B0D',
    },
    section: {
        gap: 16,
    },
    sectionHeader: {
        gap: 4,
    },
    sectionEyebrow: {
        color: '#C5A572',
        fontSize: 12,
        letterSpacing: 1,
        textTransform: 'uppercase',
    },
    sectionTitle: {
        color: '#FFFFFF',
        fontSize: 22,
        fontWeight: '700',
    },
    sectionCount: {
        color: '#9C9CAA',
        fontSize: 13,
    },
    verticalList: {
        gap: 20,
    },
});

