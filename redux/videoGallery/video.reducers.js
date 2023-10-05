import videoTypes from './video.types';
import {INITIAL_STATE} from './video.initialStates';

const videoReducers = (state = INITIAL_STATE, action) => {
  // console.log('GET VIDEO GALLERY', action.payload);
  switch (action.type) {
    case videoTypes.GET_DATA_VIDEO:
      return {
        ...INITIAL_STATE,
        loading: true,
        success: false,
        data: {
          ...state.data,
          videos: action.payload,
        },
      };

    case videoTypes.GET_DATA_VIDEO_FAILED:
      return {
        ...INITIAL_STATE,
        loading: false,
        success: false,
      };

    case videoTypes.GET_DATA_VIDEO_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };

    default:
      return state;
  }
};

export default videoReducers;
