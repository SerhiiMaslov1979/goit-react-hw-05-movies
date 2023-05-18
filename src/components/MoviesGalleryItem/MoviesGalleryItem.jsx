import React from 'react';
// import NoPoster from 'assets/no-poster-available.jpg';
import { Link, useLocation } from 'react-router-dom';
import { Item, MovieTitle } from './MoviesGalleryItem.styled';

export const MoviesGalleryItem = ({ movie: { poster_path, id, title } }) => {
  const location = useLocation();
  return (
    <Item>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {/* <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/original${poster_path}`
              : NoPoster
          }
          alt={title}
          width="200"
        /> */}
        <MovieTitle>{title}</MovieTitle>
      </Link>
    </Item>
  );
};
