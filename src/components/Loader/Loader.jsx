import React from 'react';
import { LoaderBackdrop } from '../Loader/Loader.styled';
import ScaleLoader from 'react-spinners/ScaleLoader';

const Loader = () => {
  return (
    <LoaderBackdrop>
      <ScaleLoader
        color="#36d7b7"
        size={150}
        css={{ position: 'absolute', top: '25%', left: '45%' }}
      />
    </LoaderBackdrop>
  );
};

export default Loader;
