import { get } from '../../../api/apiClient';
import { ENDPOINTS } from '../../../api/endpoints';

export const chatService = {
  getMessages: async (page = 0) => {
    try {
      return await get(ENDPOINTS.CHAT, { page });
    } catch (error) {
      throw error;
    }
  },
};