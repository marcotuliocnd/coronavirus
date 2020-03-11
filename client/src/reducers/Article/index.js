import {
  ARTICLE_SUCCESS, ARTICLE_FAIL, LOAD_ARTICLE_FAIL, LOAD_ARTICLE_SUCCESS, CURRENT_ARTICLE,
} from '../../actions/Types';

const initialState = {
  data: {},
  currentArticle: null,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case LOAD_ARTICLE_FAIL:
    case ARTICLE_FAIL:
      return {
        ...state,
        loading: false,
      };

    case LOAD_ARTICLE_SUCCESS:
      return {
        ...state,
        data: payload.data,
        loading: false,
      };

    case CURRENT_ARTICLE:
      return {
        ...state,
        loading: false,
        currentArticle: payload,
      };

    default:
      return state;
  }
}
