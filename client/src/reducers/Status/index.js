import {
  STATUS_SUCCESS, STATUS_FAIL,
} from '../../actions/Types';

const initialState = {
  offline: true,
  data: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case STATUS_SUCCESS:
      return {
        offline: false,
        data: payload,
      };

    case STATUS_FAIL:
      return {
        offline: true,
      };
    
    default:
      return state;
  }
}
