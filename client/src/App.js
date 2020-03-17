import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import { loadUser } from './actions/Auth';
import { loadStatus } from './actions/Status';
import { loadArticles } from './actions/Article';
import { setAuthToken } from './actions/Auth';
import store from './store';
import Routes from './routes';

if (localStorage.getItem('@token')) {
  setAuthToken(localStorage.getItem('@token'));
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
    store.dispatch(loadArticles());
    store.dispatch(loadStatus());
  }, []);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <Routes />
        </>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
