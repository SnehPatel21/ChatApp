import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ChatHeader from '../components/ChatHeader';
import TripInfo from '../components/TripInfo';
import MessageList from '../components/MessageList';
import ChatInput from '../components/ChatInput';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch('https://qa.corider.in/assignment/chat?page=0');
      const data = await response.json();
      setMessages(data.chats);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ChatHeader />
      <TripInfo />
      <MessageList messages={messages} />
      <ChatInput />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default ChatScreen;