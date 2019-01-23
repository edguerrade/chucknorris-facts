import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const JokeRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      props.location && props.location.state && props.location.state.value ? (
        <Component {...props} />
      ) : (
        <Redirect to="/not-found" />
      )
    }
  />
);

export default JokeRoute;
