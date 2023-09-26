import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const ContactList = () => {
  const contacts = [
    {
      uid: 1,
      name: 'Hitesh Choudhary',
      status: 'Just an extra ordinary teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
      uid: 2,
      name: 'Anurag Tiwari',
      status: 'I ❤️ To Code and Teach!',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView scrollEnabled={false} style={styles.container}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userStatue}>{status}</Text>
          </View>
        ))}
      </ScrollView>
      <Text>ContactList</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {},
  container: {},
  userCard: {},
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  userName: {},
  userStatue: {},
});

export default ContactList;