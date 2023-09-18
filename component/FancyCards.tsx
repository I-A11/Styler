import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
const FancyCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevator]}>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ',
          }}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa Mahal</Text>
          <Text style={styles.cardLabel}>Pink City </Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, illo.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, illo.
          </Text>
          <Text style={styles.cardFooter}> 12 min away </Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    margin: 8,
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    margin: 12,
  },
  cardElevator: {
    backgroundColor: '#f1eaea',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
  },
  cardBody: {
    color: '#000000',
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardLabel: {
    color: '#000000',
    fontSize: 16,
    marginBottom: 4,
  },
  cardDescription: {
    color: '#531515',
    fontSize: 14,
    marginBottom: 12,
    marginTop: 6,
    flexShrink: 1,
  },
  cardFooter: {
    color: '#000000',
  },
});
