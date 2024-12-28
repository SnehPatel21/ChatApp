import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useChat } from '../context/ChatContext';
import ChatHeader from '../components/ChatHeader';
import TripInfo from '../components/TripInfo';
import MessageList from '../components/MessageList';
import ChatInput from '../components/ChatInput';

export default function ChatScreen() {
    const { chatData, fetchChatData } = useChat();
  
    useEffect(() => {
      fetchChatData();
    }, []);
  
    return (
      <SafeAreaView style={styles.container}>
        <ChatHeader tripName={chatData?.name} />
        <TripInfo 
          from={chatData?.from} 
          to={chatData?.to}
          chatData={chatData}
        />
        <MessageList messages={chatData?.chats || []} />
        <ChatInput />
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F4',
  },
});