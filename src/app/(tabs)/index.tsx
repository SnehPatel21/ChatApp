import { Stack } from 'expo-router';
import ChatScreen from '@/features/chat/screens/ChatScreen';
import React from 'react';

export default function Chat() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ChatScreen />
    </>
  );
}