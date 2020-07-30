import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      const { id, title, content } = action.payload;
      state.push({ id, title, content });
    },
  }
});

// export const selectorPost = (id) => (state) => state.filter(post => post.id === id);

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
