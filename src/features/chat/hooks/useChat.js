import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chatService } from '../services/chatService';
import {
  fetchMessagesStart,
  fetchMessagesSuccess,
  fetchMessagesFailure,
} from '../store/chatSlice';

export const useChat = () => {
  const dispatch = useDispatch();
  const { messages, loading, page } = useSelector((state) => state.chat);

  const fetchMessages = useCallback(async () => {
    if (loading) return;

    try {
      dispatch(fetchMessagesStart());
      const data = await chatService.getMessages(page);
      dispatch(fetchMessagesSuccess(data.chats));
    } catch (error) {
      dispatch(fetchMessagesFailure(error.message));
    }
  }, [dispatch, loading, page]);

  return {
    messages,
    loading,
    fetchMessages,
  };
};