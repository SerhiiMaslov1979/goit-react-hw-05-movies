import React from 'react';
import NoPoster from '../Image/sorry-image-not-available.jpg';
import { Link, useLocation } from 'react-router-dom';

const MoviesGalleryItem = ({ movie }) => {
  const { poster_path, id, title } = movie;
  const location = useLocation();

  return (
    <div>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/original${poster_path}`
              : NoPoster
          }
          alt={title}
          width="250"
        />
        <h3>{title}</h3>
      </Link>
    </div>
  );
};
export default MoviesGalleryItem;
