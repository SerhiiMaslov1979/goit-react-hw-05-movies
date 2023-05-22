import React, { Suspense, useEffect, useRef, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from '../servise/api';
import Loader from 'components/Loader/Loader';
import NoPoster from '../components/Image/sorry-image-not-available.jpg';
import { BackLink } from 'components/BackLink/BackLink';

const MovieDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movieData, setMovieData] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await getMovieDetails(movieId);
        setMovieData(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && (
        <h2 style={{ textAlign: 'center' }}>
          Try again. Something went wrong!
        </h2>
      )}
      {!error && !isLoading && movieData && (
        <div>
          <BackLink to={backLinkLocationRef.current} children={'Go back'} />
          <div>
            <img
              src={
                movieData?.poster_path
                  ? `https://image.tmdb.org/t/p/original${movieData?.poster_path}`
                  : NoPoster
              }
              alt={movieData?.title || movieData?.original_title}
              width="200"
            />
          </div>
          <div>
            <h2>{movieData?.title || movieData?.original_title}</h2>
            <p>User score: {movieData?.vote_average}</p>
            {movieData?.overview?.length > 0 && (
              <>
                <h3>Overview</h3>
                <p>{movieData?.overview}</p>
              </>
            )}
            {movieData?.genres?.length > 0 && (
              <>
                <h4>Genres</h4>
                <p>{movieData?.genres?.map(genre => genre.name).join(', ')}</p>
              </>
            )}
          </div>
        </div>
      )}
      <>
        <h2>Additional information</h2>
        <nav>
          <ul>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
        </nav>
      </>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
