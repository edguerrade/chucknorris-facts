import { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import Api from './Api';

class ChuckNorrisJokesProvider extends Component {
  state = {
    list: List(),
    category: undefined
  };

  getCategories = Api.getCategories;
  getRandomJoke = Api.getRandomJoke();

  getJokes = () => this.state.list;

  setJokes = fn =>
    this.setState(state => {
      return { list: fn(state.list) };
    });

  getCategory = () => this.state.category;

  setCategory = category => {
    if (this.state.category !== category) {
      this.getRandomJoke = Api.getRandomJoke(category);
      this.setState(state => {
        console.log('setCategory', category);
        return {
          list: state.list.clear(),
          category
        };
      });
    }
  };

  render() {
    const {
      getCategory,
      setCategory,
      getJokes,
      setJokes,
      getCategories,
      getRandomJoke
    } = this;
    return this.props.children({
      getCategory,
      setCategory,
      getCategories,
      getJokes,
      setJokes,
      getRandomJoke
    });
  }
}

ChuckNorrisJokesProvider.propTypes = {
  children: PropTypes.func.isRequired
};

export default ChuckNorrisJokesProvider;
