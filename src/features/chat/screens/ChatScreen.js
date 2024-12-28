import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ChatHeader from '../components/ChatHeader';
import TripInfo from '../components/TripInfo';
import MessageList from '../components/MessageList';
import ChatInput from '../components/ChatInput';


const ChatScreen = () => {
    const [messages, setMessages] = useState([]);
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [chatInfo, setChatInfo] = useState({ from: '', to: '', name: '' });
    const [hasMore, setHasMore] = useState(true);
  
    const fetchMessages = async (pageNumber) => {
      if (isLoading || !hasMore) return;
  
      try {
        setIsLoading(true);
        const response = await fetch(`https://qa.corider.in/assignment/chat?page=${pageNumber}`);
        const data = await response.json();
  
        if (data.chats.length === 0) {
          setHasMore(false);
          return;
        }
  
        if (pageNumber === 0) {
          setMessages(data.chats.reverse());
          setChatInfo({
            from: data.from,
            to: data.to,
            name: data.name
          });
        } else {
          setMessages(prevMessages => [...prevMessages, ...data.chats.reverse()]);
        }
        setPage(pageNumber + 1);
      } catch (error) {
        console.error('Error fetching messages:', error);
      } finally {
        setIsLoading(false);
      }
    };
  
    useEffect(() => {
      fetchMessages(0);
    }, []);
  
    const handleLoadMore = () => {
      if (!isLoading && hasMore) {
        fetchMessages(page);
      }
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <ChatHeader tripName={chatInfo.name} />
        <TripInfo 
          from={chatInfo.from} 
          to={chatInfo.to}
          chatData={{ chats: messages }}
        />
        <MessageList 
          messages={messages}
          onLoadMore={handleLoadMore}
          isLoading={isLoading}
        />
        <ChatInput />
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FAF9F4',
    },
  });
  
  export default ChatScreen;