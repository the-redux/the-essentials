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
    postUpdated(state, action) {
      const { id, title, content } = action.payload;
      const post = state.find(post => post.id === id);
      if (post) {
        post.title = title;
        post.content = content;
      }
    },
  }
});

// export const selectorPost = (id) => (state) => state.filter(post => post.id === id);

export const { postAdded, postUpdated } = postsSlice.actions;

export default postsSlice.reducer;
