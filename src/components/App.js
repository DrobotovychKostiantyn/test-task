import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header/Header';
import PostsPage from './Pages/PostsPage/PostsContainer';
import PostPage from './Pages/PostPage/PostContainer';

const App = () => (
  <>
    <Header />
    <hr />
    <Switch>
      <Route path="/posts/:id" component={PostPage} />
      <Route path="/posts" component={PostsPage} />
      {/* <Route component={() => null} /> */}
    </Switch>
  </>
);

export default App;
