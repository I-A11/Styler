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
      </View>
    </View>
  );
};
export default FancyCards;
const styles = StyleSheet.create({
  headingText: {},
  card: {},
  cardElevator: {},
  cardImage: {
    height: 180,
  },
});
