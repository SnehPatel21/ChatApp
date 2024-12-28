import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const ChatInput = () => {
  const [message, setMessage] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Reply to @Rohit Yadav"
          value={message}
          onChangeText={setMessage}
          multiline
        />
        <View style={styles.inputActions}>
          <TouchableOpacity style={styles.iconButton}>
            <Feather name="paperclip" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Feather name="camera" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Feather name="send" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
    backgroundColor: '#fff',
  },
  inputWrapper: {
    flexDirection: 'column',
    backgroundColor: '#F2F2F2',
    borderRadius: 12,
    padding: 12,
  },
  input: {
    fontSize: 16,
    maxHeight: 100,
    padding: 4,
  },
  inputActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  iconButton: {
    padding: 8,
  },
});

export default ChatInput;