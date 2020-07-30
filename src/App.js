import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { Navbar } from './app/Navbar';
import { PostsList } from './features/posts/PostsList';
import { AddPostForm } from './features/posts/AddPostForm';
import { SinglePostPage } from './features/posts/SinglePostPage';

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <React.Fragment>
              <AddPostForm/>
              <PostsList/>
            </React.Fragment>
          </Route>
          <Route exact path="/posts/:id">
            <SinglePostPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
