import PPIDAllTimeActionTypes from './ppidAllTime.types';
import {INITIAL_STATE} from './ppidAllTime.initialStates';

const PPIDAllTimeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PPIDAllTimeActionTypes.GET_DATA_PPID_ALL_TIME:
      return {
        ...INITIAL_STATE,
        loading: true,
        success: false,
        data: {
          ...state.data,
          listAllTime: action.payload,
        },
      };

    case PPIDAllTimeActionTypes.GET_DATA_PPID_ALL_TIME_FAILED:
      return {
        ...INITIAL_STATE,
        loading: false,
        success: false,
      };

    case PPIDAllTimeActionTypes.GET_DATA_PPID_ALL_TIME_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };

    default:
      return state;
  }
};

export default PPIDAllTimeReducer;
