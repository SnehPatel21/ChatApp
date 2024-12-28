import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Message = ({ message }) => {
  const isSelf = message.sender.self;

  return (
    <View style={[
      styles.container,
      isSelf ? styles.selfContainer : styles.otherContainer
    ]}>
      {!isSelf && (
        <Image
          source={{ uri: message.sender.image }}
          style={styles.avatar}
        />
      )}
      <View style={[
        styles.bubble,
        isSelf ? styles.selfBubble : styles.otherBubble
      ]}>
        <Text style={[
          styles.text,
          isSelf ? styles.selfText : styles.otherText
        ]}>
          {message.message}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 4,
    paddingHorizontal: 16,
    alignItems: 'flex-end',
  },
  selfContainer: {
    justifyContent: 'flex-end',
  },
  otherContainer: {
    justifyContent: 'flex-start',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  bubble: {
    maxWidth: '70%',
    padding: 12,
    borderRadius: 12,
  },
  selfBubble: {
    backgroundColor: '#1C63D5',
  },
  otherBubble: {
    backgroundColor: '#F2F2F2',
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
  },
  selfText: {
    color: '#FFFFFF',
  },
  otherText: {
    color: '#000000',
  },
});

export default Message;