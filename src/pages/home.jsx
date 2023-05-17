import Loader from '../components/Loader/Loader';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrendingMovies } from '../servise/api';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setError(null);
        const { results } = await getTrendingMovies();
        setMovies(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      {isLoading && <Loader />}

      {error && !isLoading && (
        <h2 style={{ textAlign: 'center' }}>Помилка. Спробуйте ще!</h2>
      )}

      {!error && !isLoading && movies.length > 0 && (
        <MoviesGallery movies={movies} state={{ from: location }} />
      )}
    </>
  );
};

export default HomePage;
