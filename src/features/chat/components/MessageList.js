import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Message from './Message';

const DateSeparator = ({ date }) => {
  const formatDate = (dateString) => {
    const messageDate = new Date(dateString);
    return messageDate.toLocaleDateString('en-US', { 
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <View style={styles.separatorContainer}>
      <View style={styles.line} />
      <Text style={styles.dateText}>{formatDate(date)}</Text>
      <View style={styles.line} />
    </View>
  );
};

const MessageList = ({ messages = [] }) => {
  // Sort messages by date, newest last
  const sortedMessages = [...messages].sort((a, b) => 
    new Date(a.time) - new Date(b.time)
  );

  const renderItem = ({ item, index }) => {
    const messageDate = new Date(item.time).toDateString();
    const prevMessageDate = index > 0 
      ? new Date(sortedMessages[index - 1].time).toDateString()
      : null;

    return (
      <>
        {(index === 0 || messageDate !== prevMessageDate) && (
          <DateSeparator date={item.time} />
        )}
        <Message message={item} />
      </>
    );
  };

  return (
    <FlatList
      style={styles.container}
      data={sortedMessages}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      inverted={false} // Changed to false to show newest at bottom
      contentContainerStyle={styles.contentContainer}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F4',
  },
  contentContainer: {
    padding: 16,
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E5E5',
  },
  dateText: {
    marginHorizontal: 8,
    color: '#666666',
    fontSize: 12,
  },
});

export default MessageList;