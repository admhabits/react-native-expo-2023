import BeritaDanSiaranActionTypes from './beritaDanSiaran.types';
import {INITIAL_STATE} from './beritaDanSiaran.initialStates';

const BeritaDanSiaranReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BeritaDanSiaranActionTypes.GET_DATA_BERITA_DAN_SIARAN:
      return {
        ...state,
        loading: true,
        success: false,
        data: {
          ...state.data,
          listData: action.payload,
        },
      };

    case BeritaDanSiaranActionTypes.GET_DATA_BERITA_DAN_SIARAN_FAILED:
      return {
        ...INITIAL_STATE,
        loading: false,
        success: false,
      };
    case BeritaDanSiaranActionTypes.GET_DATA_BERITA_DAN_SIARAN_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };

    default:
      return state;
  }
};

export default BeritaDanSiaranReducer;
