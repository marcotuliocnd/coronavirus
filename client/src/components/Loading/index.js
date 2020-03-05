import React from 'react';
import Spinner from '../../assets/icons/loading.gif';

const Loading = () => (
  <>
    <img
      src={Spinner}
      style={{ width: 200, margin: '6rem auto', display: 'block' }}
      alt="Loading..."
    />
  </>
);


export default Loading;
