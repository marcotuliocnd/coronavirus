import {
  STATUS_SUCCESS, STATUS_FAIL,
} from '../../actions/Types';

const initialState = {
  loading: true,
  offline: true,
  data: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case STATUS_SUCCESS:
      return {
        loading: false,
        offline: false,
        data: payload,
      };

    case STATUS_FAIL:
      return {
        loading: false,
        offline: true,
      };
    
    default:
      return state;
  }
}
