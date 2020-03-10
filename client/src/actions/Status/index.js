import api from '../Api'
import environment from '../../environments/environment';

import { STATUS_SUCCESS, STATUS_FAIL } from '../Types';

export const loadStatus = () => async (dispatch) => {
  try {
    const { data } = await api.get(`${environment.apiUrl}/`);
    dispatch({
      type: STATUS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.error(err.message);
    dispatch({
      type: STATUS_FAIL,
    });
  }
};

export const saveStatus = (data) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    await api.post(`${environment.apiUrl}/`, data, config);
    dispatch(loadStatus());
  } catch (err) {
    dispatch({ type: STATUS_FAIL });
  }
};