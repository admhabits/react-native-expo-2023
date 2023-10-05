import videoTypes from './video.types';
import axios from 'axios';
import {BaseUrl} from '../../utils/Constants';
// Periodically.
// PERIODICALLY
export const getVideoGallery = data => async dispatch => {
  try {
    const getData = await axios
      .get(BaseUrl + '/api/public/video?limit=10&offset=0')
      .then(function (response) {
        return response.data.data.videoResponses;
      })
      .catch(function (error) {
        return;
      });

    // console.log('CHECK RESPONSE GET VIDEO GALLLERY', JSON.stringify(getData, null, 3));

    dispatch({
      payload: getData,
      loading: false,
      success: true,
      type: videoTypes.GET_DATA_VIDEO,
    });
  } catch (error) {
    dispatch({
      type: videoTypes.GET_DATA_VIDEO_FAILED,
      error,
    });
  }
};
