import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DateSeparator = memo(({ date }) => {
  const formatDate = (dateString) => {
    const messageDate = new Date(dateString);
    return messageDate.toLocaleDateString('en-US', { 
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{formatDate(date)}</Text>
      <View style={styles.line} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E5E5',
  },
  text: {
    marginHorizontal: 8,
    color: '#666666',
    fontSize: 12,
  },
});

export default DateSeparator;