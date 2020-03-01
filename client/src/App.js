import React, { Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import Routes from './routes';

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </Fragment>
)};


export default App;
