import React, { createContext, useState, useContext } from 'react';

const ChatContext = createContext();

export function useChat() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}

export function ChatProvider({ children }) {
  const [chatData, setChatData] = useState({
    chats: [],
    from: '',
    to: '',
    name: '',
  });

  const fetchChatData = async () => {
    try {
      const response = await fetch('https://qa.corider.in/assignment/chat?page=1');
      const data = await response.json();
      setChatData(data);
    } catch (error) {
      console.error('Error fetching chat data:', error);
    }
  };

  return (
    <ChatContext.Provider value={{ chatData, fetchChatData }}>
      {children}
    </ChatContext.Provider>
  );
}