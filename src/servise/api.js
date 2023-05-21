import axios from 'axios';

const apiKey = 'a7b06e7a05ba5e2eb883b74f2a4c575a';

//trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.

export async function getTrendingMovies() {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&include_adult=false`
    );
    return data;
  } catch (error) {
    console.log('Error: ', error);
  }
}
//search/search-movies пошук фільму за ключовим словом на сторінці фільмів.

export async function getMovieByQuery(query) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=1&include_adult=false`
    );
    return data;
  } catch (error) {
    console.log('Error: ', error);
  }
}

//movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.

export async function getMovieDetails(movieId) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
    );

    return data;
  } catch (error) {
    console.log('Error: ', error);
  }
}

//movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.

export const getMoviesCredits = async movieId => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`
    );
    // console.log(data.cast);
    return data.cast;
  } catch (error) {
    console.log('Error: ', error);
  }
};

//movies/get-movie-reviews запит оглядів для сторінки кінофільму.

export const getMoviesReviews = async movieId => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`
    );
    return data.results;
  } catch (error) {
    console.log('Error: ', error);
  }
};
