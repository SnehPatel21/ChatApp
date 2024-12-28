import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const ChatInput = () => {
  const [message, setMessage] = useState('');
  const [showAttachOverlay, setShowAttachOverlay] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Reply to @Rohit Yadav"
          value={message}
          onChangeText={setMessage}
          placeholderTextColor="#999999"
        />
        <View style={styles.actionButtons}>
          <TouchableOpacity 
            onPress={() => setShowAttachOverlay(!showAttachOverlay)}
          >
            <Feather name="paperclip" size={20} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="send" size={20} color="#000" />
          </TouchableOpacity>
        </View>

        {showAttachOverlay && (
          <View style={styles.attachOverlay}>
            <TouchableOpacity style={styles.overlayIcon}>
              <Feather name="camera" size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.overlayIcon}>
              <Feather name="video" size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.overlayIcon}>
              <Feather name="file-text" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FAF9F4',
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 24,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 4,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 24,
  },
  attachOverlay: {
    position: 'absolute',
    right: 12,
    bottom: 48,
    backgroundColor: '#008000',
    borderRadius: 20,
    flexDirection: 'row',
    padding: 8,
    gap: 16,
  },
  overlayIcon: {
    padding: 4,
  }
});

export default ChatInput;