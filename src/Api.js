const ENDPOINT = 'https://api.chucknorris.io/jokes';

export const getCategories = async () => {
  try {
    const response = await fetch(`${ENDPOINT}/categories`);
    const json = await response.json();
    return json;
  } catch (e) {
    return [];
  }
};

// export const searchJoke = async query => {
//   const url = `${ENDPOINT}/search$?category=${query}`;
//   try {
//     const response = await fetch(url);
//     const json = await response.json();
//     return json;
//   } catch (e) {
//     //TODO: manage error
//     return;
//   }
// };

export const getRandomJoke = category => {
  const url = `${ENDPOINT}/random${category ? `?category=${category}` : ''}`;
  return async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      return json;
    } catch (e) {
      //TODO: manage error
      return;
    }
  };
};

export default {
  getCategories,
  // searchJoke,
  getRandomJoke
};
