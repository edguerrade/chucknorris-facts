import React from 'react';
import { Link } from 'react-router-dom';

import ChuckNorrisJokesProvider from './ChuckNorrisJokesProvider';
import CategoriesFilter from './CategoriesFilter';
import JokeList from './JokeList';

const Home = () => (
  <ChuckNorrisJokesProvider>
    {({
      getCategory,
      setCategory,
      getCategories,
      getJokes,
      setJokes,
      getRandomJoke
    }) => (
      <main>
        <CategoriesFilter
          getCategories={getCategories}
          handleChange={setCategory}
          selectedOption={getCategory()}
        />
        <JokeList
          list={getJokes()}
          onChangeList={setJokes}
          getJoke={getRandomJoke}
        >
          {joke => (
            <div key={`joke-${joke.id}`}>
              {joke.value}
              {joke.id !== 0 && (
                <Link
                  to={{
                    pathname: `/joke/${joke.id}`,
                    state: { value: joke.value }
                  }}
                >
                  GO
                </Link>
              )}
            </div>
          )}
        </JokeList>
      </main>
    )}
  </ChuckNorrisJokesProvider>
);

export default Home;
