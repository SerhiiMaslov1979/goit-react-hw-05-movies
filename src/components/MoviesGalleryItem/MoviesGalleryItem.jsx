import React from 'react';

import { Link, useLocation } from 'react-router-dom';
import { Item, MovieTitle } from './MoviesGalleryItem.styled';

export const MoviesGalleryItem = ({ movie: { poster_path, id, title } }) => {
  const location = useLocation();
  return (
    <Item>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <MovieTitle>{title}</MovieTitle>
      </Link>
    </Item>
  );
};
