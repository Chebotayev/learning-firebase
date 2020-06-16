import { createActions } from 'redux-actions';

export const {
  login,
  signUp,
} = createActions({
  LOGIN: {
    CALL: undefined,
    SUCCESS: undefined,
    FAILURE: undefined,
  },
  SIGN_UP: {
    CALL: undefined,
    SUCCESS: undefined,
    FAILURE: undefined,
  },
});
