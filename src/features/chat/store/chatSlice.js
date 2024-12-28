import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [],
  loading: false,
  error: null,
  page: 0,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    fetchMessagesStart: (state) => {
      state.loading = true;
    },
    fetchMessagesSuccess: (state, action) => {
      state.messages = [...state.messages, ...action.payload];
      state.loading = false;
      state.page += 1;
    },
    fetchMessagesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchMessagesStart,
  fetchMessagesSuccess,
  fetchMessagesFailure,
} = chatSlice.actions;

export default chatSlice.reducer;
