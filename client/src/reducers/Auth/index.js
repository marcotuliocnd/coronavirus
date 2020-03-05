import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../../actions/Types';

const initialState = {
  token: localStorage.getItem('@token'),
  user: JSON.parse(localStorage.getItem('@user')),
  isAuthenticated: null,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      localStorage.setItem('@token', payload.data.token);
      localStorage.setItem('@user', JSON.stringify(payload.data.user));
      return {
        ...state,
        ...payload.data,
        isAuthenticated: true,
        loading: false,
      };

    case LOGOUT:
    case LOGIN_FAIL:
      localStorage.removeItem('@token');
      localStorage.removeItem('@user');
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        loading: false,
      };

    default:
      return state;
  }
}
