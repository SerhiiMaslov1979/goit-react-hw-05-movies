// import React, { useEffect, useRef, useState } from 'react';
// import { useLocation, useSearchParams } from 'react-router-dom';
// import { getMovieByQuery } from '../serviсe/api';
// import { BackLink } from '../components/BackLink/BackLink';
// import Loader from '../components/Loader/Loader';
// import { MoviesGallery } from '../components/MoviesGallery/MoviesGallery';
// import { SearchBar } from '../components/SearchBar/SearchBar';

// const MoviesPage = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [movies, setMovies] = useState([]);

//   const [searchParams, setSearchParams] = useSearchParams();
//   const query = searchParams.get('query') || '';

//   const location = useLocation();
//   const backLinkLocationRef = useRef(location.state?.from ?? '/');

//   useEffect(() => {
//     (async () => {
//       try {
//         if (query === '') return;
//         setIsLoading(true);
//         setError(null);

//         const data = await getMovieByQuery(query);

//         if (data.total_results === 0) {
//           alert(
//             `Sorry, there are no images matching your search query '${query}'. Please try again.`
//           );
//           return;
//         }
//         setMovies(data.results);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setIsLoading(false);
//       }
//     })();
//   }, [query, location.search]);

//   const updateQueryString = value => {
//     if (value === '') {
//       setSearchParams({});
//       return;
//     }
//     setSearchParams({ query: value });
//     setMovies([]);
//   };

//   return (
//     <>
//       <BackLink to={backLinkLocationRef.current} children={'Go back'} />
//       <SearchBar onSubmit={updateQueryString} />
//       {isLoading && <Loader />}

//       {error && !isLoading && (
//         <h2 style={{ textAlign: 'center' }}>
//           Try again. Something went wrong!
//         </h2>
//       )}

//       {!error && !isLoading && movies.length > 0 && (
//         <MoviesGallery movies={movies} state={{ from: location }} />
//       )}
//     </>
//   );
// };

// export default MoviesPage;
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from '../servise/api';
import { BackLink } from '../components/BackLink/BackLink';
import Loader from '../components/Loader/Loader';
import { MoviesGallery } from '../components/MoviesGallery/MoviesGallery';
import { SearchBar } from '../components/SearchBar/SearchBar';

const MoviesPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    (async () => {
      try {
        if (query === '') return;
        setIsLoading(true);
        setError(null);

        const data = await getMovieByQuery(query);

        if (data.total_results === 0) {
          alert(
            `Sorry, there are no images matching your search query '${query}'. Please try again.`
          );
          return;
        }
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [query, location.search]);

  const updateQueryString = value => {
    if (value === '') {
      setSearchParams({});
      return;
    }
    setSearchParams({ query: value });
    setMovies([]);
  };

  const moviesPerPage = 21; // Кількість постерів на сторінці

  return (
    <>
      <BackLink to={backLinkLocationRef.current} children={'Go back'} />
      <SearchBar onSubmit={updateQueryString} />
      {isLoading && <Loader />}

      {error && !isLoading && (
        <h2 style={{ textAlign: 'center' }}>
          Try again. Something went wrong!
        </h2>
      )}

      {!error && !isLoading && movies.length > 0 && (
        <MoviesGallery
          movies={movies}
          perPage={moviesPerPage}
          state={{ from: location }}
        />
      )}
    </>
  );
};

export default MoviesPage;
