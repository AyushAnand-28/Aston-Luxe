import React from 'react';
import { Text, StyleSheet, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const pillars = [
    {
        title: 'Handcrafted Craftsmanship',
        copy: 'Each Aston Martin is assembled by artisans in Gaydon, where hand-stitched leather, bespoke veneers, and precision-milled switchgear are meticulously finished for every commission.',
    },
    {
        title: 'Engineering Ingenuity',
        copy: 'From the first twin-cam engines to today’s hybrid twin-turbo V12s, Aston Martin balances raw power with a grand touring soul tested on Silverstone and Nürburgring.',
    },
    {
        title: 'Bespoke Personalisation',
        copy: 'Q by Aston Martin lets owners specify unique paints, interior palettes, and materials sourced from British tanneries, Japanese ceramics, and aerospace composites.',
    },
];

const milestones = [
    { label: '1913', value: 'Bamford & Martin founded in London' },
    { label: '1959', value: 'DBR1 wins Le Mans with Carroll Shelby' },
    { label: '2001', value: 'Return to Formula 1 development' },
    { label: '2024', value: 'Valhalla ushers in hybrid supercars' },
];

export default function AboutScreen() {
    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                <Text style={styles.eyebrow}>Brand Manifesto</Text>
                <Text style={styles.title}>A Heritage of Excellence</Text>
                <Text style={styles.body}>
                    Since 1913, Aston Martin has crafted some of the world’s most iconic grand tourers and performance
                    cars. Rooted in British motorsport, the marque pairs elegant design with cutting-edge aerodynamics,
                    producing machines that feel equally at home on The Mall or the Mulsanne Straight.
                </Text>
                <Text style={styles.body}>
                    Every model is a statement of intent: powerful, poised, and exquisitely designed. From sculpted
                    silhouettes to meticulously curated interiors, Aston Martin embodies a philosophy where performance,
                    innovation, and elegance converge.
                </Text>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Our Pillars</Text>
                    {pillars.map((pillar) => (
                        <View key={pillar.title} style={styles.card}>
                            <Text style={styles.cardTitle}>{pillar.title}</Text>
                            <Text style={styles.cardCopy}>{pillar.copy}</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Moments That Shape Us</Text>
                    <View style={styles.timeline}>
                        {milestones.map((milestone, index) => (
                            <View key={milestone.label} style={styles.timelineItem}>
                                <View style={styles.timelineDot} />
                                <View style={styles.timelineContent}>
                                    <Text style={styles.timelineLabel}>{milestone.label}</Text>
                                    <Text style={styles.timelineValue}>{milestone.value}</Text>
                                </View>
                                {index < milestones.length - 1 && <View style={styles.timelineLine} />}
                            </View>
                        ))}
                    </View>
                </View>

                <View style={styles.closing}>
                    <Text style={styles.closingQuote}>
                        “We exist to create the world’s most beautiful cars — a perfect blend of performance and soul.”
                    </Text>
                    <Text style={styles.closingCaption}>— Marek Reichman, Chief Creative Officer</Text>
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
        gap: 18,
        paddingBottom: 60,
    },
    eyebrow: {
        color: '#C5A572',
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: 1,
        textTransform: 'uppercase',
    },
    title: {
        color: '#FFFFFF',
        fontSize: 26,
        fontWeight: '700',
    },
    body: {
        color: '#C6C6CC',
        lineHeight: 22,
        fontSize: 15,
    },
    section: {
        gap: 14,
        marginTop: 12,
    },
    sectionTitle: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '700',
        letterSpacing: 0.5,
    },
    card: {
        backgroundColor: '#101015',
        borderRadius: 18,
        padding: 16,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.08)',
        gap: 8,
    },
    cardTitle: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700',
    },
    cardCopy: {
        color: '#9C9CAA',
        lineHeight: 20,
        fontSize: 14,
    },
    timeline: {
        backgroundColor: '#0F0F12',
        borderRadius: 18,
        padding: 16,
        borderWidth: 1,
        borderColor: 'rgba(197,165,114,0.2)',
        gap: 10,
    },
    timelineItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    timelineDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#C5A572',
        marginTop: 4,
    },
    timelineContent: {
        marginLeft: 12,
        flex: 1,
    },
    timelineLabel: {
        color: '#9C9CAA',
        fontSize: 12,
        letterSpacing: 1,
        textTransform: 'uppercase',
    },
    timelineValue: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
        marginTop: 2,
    },
    timelineLine: {
        position: 'absolute',
        left: 4,
        top: 16,
        bottom: -10,
        width: 2,
        backgroundColor: 'rgba(255,255,255,0.12)',
    },
    closing: {
        marginTop: 8,
        backgroundColor: '#111114',
        borderRadius: 18,
        padding: 20,
        gap: 10,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.08)',
    },
    closingQuote: {
        color: '#FFFFFF',
        fontSize: 18,
        lineHeight: 26,
        fontStyle: 'italic',
    },
    closingCaption: {
        color: '#9C9CAA',
        fontSize: 13,
    },
});

