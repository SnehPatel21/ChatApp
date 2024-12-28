import axios from 'axios';
import { API_CONFIG } from './config';

const apiClient = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
});

export const get = async (endpoint: string, params = {}) => {
  try {
    const response = await apiClient.get(endpoint, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};
