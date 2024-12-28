import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TripInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tripInfoLeft}>
        <Text style={styles.tripFrom}>From IGI Airport, T3</Text>
        <Text style={styles.tripTo}>To Sector 28</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  tripInfoLeft: {
    flexDirection: 'column',
    gap: 4,
  },
  tripFrom: {
    fontSize: 16,
    fontWeight: '500',
  },
  tripTo: {
    fontSize: 16,
    fontWeight: '500',
    color: '#666',
  },
});

export default TripInfo;