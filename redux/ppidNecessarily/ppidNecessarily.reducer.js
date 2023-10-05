import PPIDNecessarilyActionTypes from './ppidNecessarily.types';
import {INITIAL_STATE} from './ppidNecessarily.initialStates';

const PPIDNecessarilyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PPIDNecessarilyActionTypes.GET_DATA_PPID_NECESSARILY:
      return {
        ...INITIAL_STATE,
        loading: true,
        success: false,
        data: {
          ...state.data,
          listData: action.payload,
        },
      };

    case PPIDNecessarilyActionTypes.GET_DATA_PPID_NECESSARILY_FAILED:
      return {
        ...INITIAL_STATE,
        loading: false,
        success: false,
      };

    case PPIDNecessarilyActionTypes.GET_DATA_PPID_NECESSARILY_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };

    default:
      return state;
  }
};

export default PPIDNecessarilyReducer;
