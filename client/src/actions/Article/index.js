import api from '../Api'
import environment from '../../environments/environment';
import setAlert from '../Alert';

import { ARTICLE_SUCCESS, ARTICLE_FAIL } from '../Types';

export const save = (data) => async (dispatch) => {
  try {
    const config = { 
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    };
    const response = await api.post(`${environment.apiUrl}/articles`, data, config);
    dispatch({
      type: ARTICLE_SUCCESS,
      payload: response.data,
    });
    dispatch(setAlert('Salvo com sucesso!', 'success'));
  } catch (err) {
    dispatch(setAlert(err.response.data.data, 'danger'));
    dispatch({ type: ARTICLE_FAIL });
  }
};

