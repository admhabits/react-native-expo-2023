import LoginActionTypes from './login.types';
import {INITIAL_STATE} from './login.initialStates';

const LoginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LoginActionTypes.POST_LOGIN:
      return {
        ...INITIAL_STATE,
        loading: true,
        success: false,
        data: {
          ...state.data,
          token: action.payload.token,
          remember: action.payload.remember,
          roles: action.payload.roles,
        },
      };

    case LoginActionTypes.POST_LOGIN_FAILED:
      return {
        ...INITIAL_STATE,
        loading: false,
        success: false,
      };
    case LoginActionTypes.POST_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };

    case LoginActionTypes.POST_LOGOUT:
      return {
        ...INITIAL_STATE,
        loading: true,
        success: false,
        data: {
          ...state.data,
          token: null,
          remember: false,
        },
      };

    case LoginActionTypes.POST_LOGOUT_FAILED:
      return {
        ...INITIAL_STATE,
        loading: false,
        success: false,
      };
    case LoginActionTypes.POST_LOGOUT_SUCCESS:
      return {
        ...INITIAL_STATE,
        loading: false,
        success: true,
      };

    default:
      return state;
  }
};

export default LoginReducer;
