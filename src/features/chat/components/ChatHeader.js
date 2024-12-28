import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const ChatHeader = ({ tripName }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftSection}>
          <TouchableOpacity style={styles.backButton}>
            <Feather name="chevron-left" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>{tripName}</Text>
        </View>
        
        <TouchableOpacity style={styles.editButton}>
          <Feather name="edit" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAF9F4',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  editButton: {
    padding: 4,
  },
});

export default ChatHeader;