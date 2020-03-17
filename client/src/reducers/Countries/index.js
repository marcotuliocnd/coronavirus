import {
  COUNTRIES_SUCCESS, COUNTRIES_FAIL, COUNTRIES_COLOR,
} from '../../actions/Types';

const initialState = {
  loading: true,
  data: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case COUNTRIES_SUCCESS:
      return {
        loading: false,
        data: payload,
      };

    case COUNTRIES_FAIL:
      return {
        loading: false,
        data: [],
      };

    case COUNTRIES_COLOR:
      state.data.forEach((country) => country.color = undefined);
      if (payload) {
        const changed = state.data.find((country) => country.country === payload);
        changed.color = '#62929E'
      }
      return {
        ...state,
      }
    
    default:
      return state;
  }
}
