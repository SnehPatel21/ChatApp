import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const formatTime = (timeString) => {
  const date = new Date(timeString);
  return date.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  });
};

const Message = React.memo(function Message({ message }) {
  const isSelf = message.sender.self;
  
  return (
    <View style={[
      styles.container,
      isSelf ? styles.selfContainer : styles.otherContainer
    ]}>
      {!isSelf && (
        <View style={styles.senderInfo}>
          <Image
            source={{ uri: message.sender.image }}
            style={styles.avatar}
          />
          {message.sender.is_kyc_verified && (
            <View style={styles.verifiedBadge}>
              <Ionicons name="checkmark-circle" size={14} color="#1C63D5" />
            </View>
          )}
        </View>
      )}
      <View style={styles.messageContent}>
        <View style={[
          styles.bubble,
          isSelf ? styles.selfBubble : styles.otherBubble
        ]}>
          <Text style={[
            styles.text,
            isSelf ? styles.selfText : styles.otherText
          ]}>
            {message.message.replace(/<br>/g, '\n')}
          </Text>
        </View>
        <Text style={[
          styles.timeText,
          isSelf ? styles.selfTimeText : styles.otherTimeText
        ]}>
          {formatTime(message.time)}
        </Text>
      </View>
    </View>
  );
}, (prevProps, nextProps) => {
  return prevProps.message.id === nextProps.message.id;
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 4,
    paddingHorizontal: 16,
    alignItems: 'flex-end',
  },
  selfContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  otherContainer: {
    justifyContent: 'flex-start',
  },
  senderInfo: {
    position: 'relative',
    marginRight: 8,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  verifiedBadge: {
    position: 'absolute',
    right: -2,
    bottom: -2,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 2,
  },
  messageContent: {
    maxWidth: '70%',
  },
  bubble: {
    padding: 12,
    borderRadius: 12,
    marginBottom: 4,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOpacity: 0.08,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    elevation: 4,
  },
  selfBubble: {
    backgroundColor: '#1C63D5',
    borderTopRightRadius: 2,
  },
  otherBubble: {
    backgroundColor: '#F2F2F2',
    borderTopLeftRadius: 2,
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
  timeText: {
    fontSize: 12,
    marginTop: 2,
    opacity: 0.7,
  },
  selfTimeText: {
    color: '#666',
    textAlign: 'right',
  },
  otherTimeText: {
    color: '#666',
  },
});

export default Message;