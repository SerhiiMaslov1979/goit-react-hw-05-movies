import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const HomePage = lazy(() => import('pages/home'));

export const App = () => {
  return (
    <Suspense fallback={<p>...Load page</p>}>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </Suspense>
  );
};
