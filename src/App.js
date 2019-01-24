import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import JokeRoute from './JokeRoute';
import JokeView from './JokeView';
import NotFound from './NotFound';

/* I am guessing you might be familiar with Chuck Norris, and maybe as well Chuck Norris jokes!
There is a free api: https://api.chucknorris.io/
That gets random chuck norris jokes.

The idea would be to create a simple web app, that has a feed of random jokes.
When scrolling down on the feed, it will then request more jokes to populate the viewport.
When clicking on a joke, it will isolate the joke.
When going back you would then return to the feed.

You will also have to provide a way to filter by categories https://api.chucknorris.io/jokes/categories

The requirements are:
- ES6 or superior and React should be used for the frontend
- The project should provide a way to bundle the assets for development and production */

/**
 * @author eguerra
 */
const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={Home} />
      <JokeRoute exact path="/joke/:id" component={JokeView} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
