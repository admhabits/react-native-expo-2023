import PPIDPeriodicallyActionTypes from './ppidPeriodically.types';
import {INITIAL_STATE} from './ppidPeriodically.initialStates';

const PPIDPeriodicallyReducer = (state = INITIAL_STATE, action) => {
  // console.log('poooooo', action.payload);
  switch (action.type) {
    case PPIDPeriodicallyActionTypes.GET_DATA_PPID_PERIODICALLY:
      return {
        ...INITIAL_STATE,
        loading: true,
        success: false,
        data: {
          ...state.data,
          listData: action.payload,
        },
      };

    case PPIDPeriodicallyActionTypes.GET_DATA_PPID_PERIODICALLY_FAILED:
      return {
        ...INITIAL_STATE,
        loading: false,
        success: false,
      };

    case PPIDPeriodicallyActionTypes.GET_DATA_PPID_PERIODICALLY_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };

    default:
      return state;
  }
};

export default PPIDPeriodicallyReducer;
