import api from '../Api'
import environment from '../../environments/environment';
import setAlert from '../Alert';

import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, USER_LOADED } from '../Types';

export const login = (data) => async (dispatch) => {
  try {
    const response = await api.post(`${environment.apiUrl}/auth/login`, data);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data,
    });
    dispatch(loadUser());
  } catch (err) {
    dispatch(setAlert(err.response.data.data, 'danger'));
    dispatch({ type: LOGIN_FAIL });
  }
};

export const setAuthToken = (token) => {
  if(token) {
    api.defaults.headers.common['authorization'] = token;
  } else {
    delete api.defaults.headers.common['authorization'];
  }
}

export const loadUser = () => async dispatch => {
  if (localStorage.getItem('@token')) {
    const payload = {
      token: localStorage.getItem('@token'),
      user: JSON.parse(localStorage.getItem('@user'))
    }
    setAuthToken(localStorage.getItem('@token'));
    dispatch({
      type: USER_LOADED,
      payload
    });
  } else {
    dispatch({
      type: LOGOUT,
    });
  }
}

export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
