import { ARTICLE_SUCCESS, ARTICLE_FAIL } from '../../actions/Types';

const initialState = {
  data: [],
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

    case ARTICLE_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
