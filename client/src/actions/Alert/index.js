import { v4 } from 'uuid';

import { SET_ALERT, REMOVE_ALERT } from '../Types';

const setAlert = (message, alertType) => async (dispatch) => {
  const id = v4();
  dispatch({
    type: SET_ALERT,
    payload: { id, message, alertType },
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
};

export default setAlert;
