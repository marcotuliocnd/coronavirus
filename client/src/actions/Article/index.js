import api from '../Api';
import environment from '../../environments/environment';
import setAlert from '../Alert';

import {
  ARTICLE_FAIL, LOAD_ARTICLE_SUCCESS, LOAD_ARTICLE_FAIL, CURRENT_ARTICLE,
} from '../Types';

export const loadArticles = (page = 1) => async (dispatch) => {
  try {
    const response = await api.get(`${environment.apiUrl}/articles?page=${page}`);
    dispatch({
      type: LOAD_ARTICLE_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    dispatch(setAlert('Erro ao carregar fotos', 'danger'));
    dispatch({ type: LOAD_ARTICLE_FAIL });
  }
};

export const remove = (article) => async (dispatch) => {
  try {
    await api.delete(`${environment.apiUrl}/articles/${article._id}`);
    dispatch(loadArticles());
  } catch (err) {
    console.error(err.message);
    dispatch(setAlert(err.response.data.data, 'danger'));
  }
};

export const save = (data) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    await api.post(`${environment.apiUrl}/articles`, data, config);
    dispatch(loadArticles());
    dispatch(setAlert('Salvo com sucesso!', 'success'));
  } catch (err) {
    dispatch(setAlert(err.response.data.data, 'danger'));
    dispatch({ type: ARTICLE_FAIL });
    throw new Error('Falha');
  }
};

export const show = (id) => async (dispatch) => {
  try {
    const response = await api.get(`${environment.apiUrl}/articles/${id}`);
    dispatch({ type: CURRENT_ARTICLE, payload: response.data.data });
  } catch (err) {
    console.error(err.message);
  }
};

export const setCurrentArticle = (article) => async (dispatch) => dispatch({ type: CURRENT_ARTICLE, payload: article });
