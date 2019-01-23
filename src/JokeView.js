import React from 'react';
import { Link } from 'react-router-dom';

const JokeView = ({ location /*, match*/ }) => {
  const { value } = location.state;
  // const { id } = match.params;
  return (
    <div>
      <h2>{value}</h2>
      <Link to="/">BACK</Link>
    </div>
  );
};

export default JokeView;
