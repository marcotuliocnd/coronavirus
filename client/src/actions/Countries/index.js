import axios from 'axios';
import environment from '../../environments/environment';

import {
  COUNTRIES_SUCCESS, COUNTRIES_FAIL, COUNTRIES_COLOR,
} from '../Types';

const loadCountries = () => async (dispatch) => {
  try {
    const response = await axios.get(`${environment.apiUrl}/countries`);
    dispatch({
      type: COUNTRIES_SUCCESS,
      payload: response.data.data,
    });
  } catch (err) {
    dispatch({ type: COUNTRIES_FAIL });
  }
};

export const setColor = (country) => async (dispatch) => {
  dispatch({
    type: COUNTRIES_COLOR,
    payload: country,
  });
};

export const loadCoordinates = (country) => async (dispatch) => {
  try {
    const data = await axios.get(`${environment.apiUrl}/coordinates`);
    return data;
  } catch (err) {
    console.error(err.message);
  }
};

export default loadCountries;
