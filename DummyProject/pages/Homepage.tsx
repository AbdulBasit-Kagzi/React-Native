/* eslint-disable prettier/prettier */

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import UserCard from '../components/Card';

export default function Homepage({navigation}) {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Homepage</Text>
      <UserCard navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
});
