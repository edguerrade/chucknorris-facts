import React, { Component, Fragment } from 'react';
import ReactModal from 'react-modal';

import ChuckNorrisJokesProvider from './ChuckNorrisJokesProvider';
import CategoriesFilter from './CategoriesFilter';
import JokeList from './JokeList';
ReactModal.setAppElement('#root');

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
class App extends Component {
  state = {
    showModal: false,
    contentLabel: undefined
  };

  _handleOpenModal = joke => {
    window.location.hash = `#${joke.id}`
    window.onpopstate = () => {
      this._handleCloseModal();
    };
    this.setState({
      showModal: true,
      contentLabel: joke.value
    });
  };

  _locationBack = () => {
    window.history.back();
  }

  _handleCloseModal = () => {
    this.setState({
      showModal: false
    });
  };

  render() {
    return (
      <Fragment>
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
                {joke => {
                  return (
                    <div
                      key={`joke-${joke.id}`}
                      onClick={() =>
                        joke.id !== 0 && this._handleOpenModal(joke)
                      }
                    >
                      {joke.value}
                    </div>
                  );
                }}
              </JokeList>
            </main>
          )}
        </ChuckNorrisJokesProvider>
        <ReactModal
          shouldCloseOnOverlayClick
          isOpen={this.state.showModal}
          onRequestClose={this._locationBack}
          contentLabel={this.state.contentLabel}
        >
          <h2>Fact</h2>
          <p>{this.state.contentLabel}</p>
          <button onClick={this._locationBack}>Close Modal</button>
        </ReactModal>
      </Fragment>
    );
  }
}

export default App;
