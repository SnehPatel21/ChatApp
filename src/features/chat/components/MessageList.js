import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Message from './Message';

const MessageList = ({ messages = [] }) => {
  const renderMessage = ({ item }) => (
    <Message message={item} />
  );

  return (
    <FlatList
      style={styles.container}
      data={messages}
      renderItem={renderMessage}
      keyExtractor={(item) => item.id.toString()}
      inverted
      contentContainerStyle={styles.contentContainer}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    paddingVertical: 16,
  },
});

export default MessageList;