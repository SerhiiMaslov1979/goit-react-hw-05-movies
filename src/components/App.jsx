import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
// import { Layout } from './Layout/Layout';

const Home = lazy(() => import('pages/home'));
const Movies = lazy(() => import('pages/movies'));
// const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));
// const Cast = lazy(() => import('./Cast/Cast'));
// const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Suspense fallback={<p>...Load page</p>}>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        {/* <Route path="movies/:movieId" element={<MovieDetailsPage />}> */}
        {/* <Route path="cast" element={<Cast />} /> */}
        {/* <Route path="reviews" element={<Reviews />} /> */}
        {/* </Route> */}
        {/* </Route> */}
      </Routes>
    </Suspense>
  );
};
