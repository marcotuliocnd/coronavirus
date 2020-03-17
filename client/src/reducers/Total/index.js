import {
  TOTAL_SUCCESS, TOTAL_FAIL,
} from '../../actions/Types';

const initialState = {
  loading: true,
  data: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case TOTAL_SUCCESS:
      return {
        loading: false,
        data: payload,
      };

    case TOTAL_FAIL:
      return {
        loading: false,
        data: [],
      };

    default:
      return state;
  }
}
