import axios from 'axios';
import environment from '../../environments/environment';

import {
  TOTAL_SUCCESS, TOTAL_FAIL,
} from '../Types';

const loadTotal = (country) => async (dispatch) => {
  try {
    if (country) {
      const response = await axios.get(`${environment.apiUrl}/countries?country=${country}`);
      console.log(response.data);
      dispatch({
        type: TOTAL_SUCCESS,
        payload: response.data.data,
      });
    } else {
      const response = await axios.get(`${environment.apiUrl}/totals`);
      dispatch({
        type: TOTAL_SUCCESS,
        payload: response.data.data,
      });
    }
  } catch (err) {
    dispatch({ type: TOTAL_FAIL });
  }
};

export default loadTotal;
