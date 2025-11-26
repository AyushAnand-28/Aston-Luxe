import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeroBanner from '../components/HeroBanner';
import FeaturedCarousel from '../components/FeaturedCarousel';
import { models } from '../data/models';

const featuredModels = models.slice(0, 4);
const stats = [
    { label: 'Heritage', value: '112 yrs', description: 'Crafted legacy since 1913' },
    { label: '0-60 mph', value: '2.5 s', description: 'Valhalla launch control' },
    { label: 'Top Speed', value: '217 mph', description: 'Valkyrie track spec' },
];

const quickActions = [
    { id: 'test-drive', title: 'Book a Ride', subtitle: 'Reserve a personalized session' },
    // { id: 'tailor', title: 'Tailor-Made', subtitle: 'Design your bespoke Aston' },
];

const storyQuote =
    '“Aston Martin occupies a special place in automotive history — balancing raw performance with pure sculpture.”';

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <ScrollView contentContainerStyle={styles.content}>
                <View>
                    <HeroBanner />
                </View>
                <View style={styles.copy}>
                    <Text style={styles.heading}>Welcome to Aston Luxe</Text>
                    <Text style={styles.subcopy}>
                        Explore the world of Aston Martin — where engineering excellence meets timeless elegance.
                    </Text>
                </View>

                <View style={styles.statsPanel}>
                    {stats.map((stat, index) => (
                        <View key={stat.label} style={styles.statItem}>
                            <View style={styles.statAccent} />
                            <Text style={styles.statLabel}>{stat.label}</Text>
                            <Text style={styles.statValue}>{stat.value}</Text>
                            <Text style={styles.statDescription}>{stat.description}</Text>
                            {index < stats.length - 1 && <View style={styles.statDivider} />}
                        </View>
                    ))}
                </View>

                

                <View style={styles.sectionHeader}>
                    <Text style={styles.eyebrow}>Signature Collection</Text>
                    <Text style={styles.sectionTitle}>Featured Models</Text>
                </View>
                <FeaturedCarousel models={featuredModels} />

                <View style={styles.quickActions}>
                    {quickActions.map((action) => (
                        <TouchableOpacity key={action.id} style={styles.quickCard} activeOpacity={0.85}>
                            <View style={styles.quickBadge} />
                            <View>
                                <Text style={styles.quickTitle}>{action.title}</Text>
                                <Text style={styles.quickSubtitle}>{action.subtitle}</Text>
                            </View>
                            <Text style={styles.quickArrow}>→</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={styles.storyCard}>
                    <Text style={styles.storyEyebrow}>Crafted Stories</Text>
                    <Text style={styles.storyQuote}>{storyQuote}</Text>
                    <Text style={styles.storyAuthor}>— Design Director, Gaydon Studio</Text>
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
        padding: 20,
        paddingTop: 20,
        gap: 32,
        paddingBottom: 60,
    },
    copy: {
        gap: 10,
    },
    statsPanel: {
        backgroundColor: '#0F0F12',
        borderRadius: 20,
        paddingVertical: 16,
        paddingHorizontal: 18,
        borderWidth: 1,
        borderColor: 'rgba(197,165,114,0.18)',
    },
    statItem: {
        paddingVertical: 12,
        position: 'relative',
    },
    statAccent: {
        position: 'absolute',
        top: 12,
        left: 0,
        width: 3,
        height: 32,
        borderRadius: 3,
        backgroundColor: '#C5A572',
    },
    statLabel: {
        marginLeft: 14,
        color: '#9C9CAA',
        fontSize: 12,
        letterSpacing: 1,
        textTransform: 'uppercase',
    },
    statValue: {
        marginLeft: 14,
        color: '#FFFFFF',
        fontSize: 26,
        fontWeight: '700',
        marginTop: 4,
    },
    statDescription: {
        marginLeft: 14,
        color: '#C6C6CC',
        fontSize: 13,
    },
    statDivider: {
        height: 1,
        backgroundColor: 'rgba(255,255,255,0.08)',
        marginTop: 12,
    },
    sectionHeader: {
        gap: 6,
    },
    eyebrow: {
        color: '#C5A572',
        fontSize: 12,
        letterSpacing: 1,
        textTransform: 'uppercase',
    },
    sectionTitle: {
        color: '#FFFFFF',
        fontSize: 22,
        fontWeight: '700',
        letterSpacing: 0.5,
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
    quickActions: {
        gap: 16,
    },
    quickCard: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        backgroundColor: '#111114',
        borderRadius: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.08)',
    },
    quickBadge: {
        width: 38,
        height: 38,
        borderRadius: 12,
        backgroundColor: '#C5A572',
        opacity: 0.15,
    },
    quickTitle: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700',
    },
    quickSubtitle: {
        color: '#9C9CAA',
        fontSize: 13,
    },
    quickArrow: {
        marginLeft: 'auto',
        color: '#C5A572',
        fontSize: 20,
    },
    storyCard: {
        backgroundColor: '#0F0F12',
        borderRadius: 20,
        padding: 20,
        gap: 12,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.2)',
    },
    storyEyebrow: {
        color: '#C5A572',
        fontSize: 12,
        letterSpacing: 1,
        textTransform: 'uppercase',
    },
    storyQuote: {
        color: '#FFFFFF',
        fontSize: 18,
        lineHeight: 26,
        fontStyle: 'italic',
    },
    storyAuthor: {
        color: '#9C9CAA',
        fontSize: 13,
    },
});

