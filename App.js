import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './src/store/store';
import AppNavigator from './src/navigation/AppNavigator';
import { ChatProvider } from './src/features/chat/context/ChatContext';

export default function App() {
  return (
    <ChatProvider>
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
    </ChatProvider>
  );
}