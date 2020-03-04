import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import store from './store';
import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <>
        <Routes />
      </>
    </BrowserRouter>
  </Provider>
);


export default App;
