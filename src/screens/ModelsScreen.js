import React from 'react';
import { View, StyleSheet, FlatList, Dimensions } from 'react-native';
import { models } from '../data/models';
import ModelCard from '../components/ModelCard';

const { width } = Dimensions.get('window');
const numColumns = 2;
const cardGap = 16;
const cardWidth = (width - 20 * 2 - cardGap) / numColumns;

export default function ModelsScreen() {
    return (
        <View style={styles.container}>
            <FlatList
                data={models}
                keyExtractor={(item) => item.id}
                numColumns={numColumns}
                columnWrapperStyle={{ gap: 16 }}
                contentContainerStyle={{ padding: 20, gap: 16 }}
                renderItem={({ item }) => (
                    <View style={{ width: cardWidth }}>
                        <ModelCard model={item} />
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0B0B0D',
    },
});

