import { configureStore } from '@reduxjs/toolkit';
import chatReducer from '../features/chat/store/chatSlice';

export const store = configureStore({
  reducer: {
    chat: chatReducer,
  },
});