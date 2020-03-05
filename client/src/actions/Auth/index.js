import axios from 'axios';
import environment from '../../environments/environment';
import setAlert from '../Alert';

import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../Types';

export const login = (data) => async (dispatch) => {
  try {
    const response = await axios.post(`${environment.apiUrl}/auth/login`, data);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data,
    });
    dispatch(setAlert('Logado com sucesso!', 'success'));
  } catch (err) {
    dispatch(setAlert(err.response.data.data, 'danger'));
    dispatch({ type: LOGIN_FAIL });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
