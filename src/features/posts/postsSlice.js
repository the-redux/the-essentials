import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!', user: '0', date: '2020-08-03T01:12:22.281Z' },
  { id: '2', title: 'Second Post', content: 'More text', user: '2', date: '2020-08-04T10:10:22.281Z' },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            user: userId,
          }
        };
      }
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
