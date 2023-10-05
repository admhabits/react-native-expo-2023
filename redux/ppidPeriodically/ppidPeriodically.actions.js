import DataPPIDPeriodically from './ppidPeriodically.types';
import axios from 'axios';
import {BaseUrl} from '../../utils/Constants';
// Periodically.
// PERIODICALLY
export const getPPIDPeriodically = data => async dispatch => {
  try {
    const getData = await axios
      .get(BaseUrl + `/api/ppid-berkala/?search=${data.search}`, {
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      })
      .then(function (response) {
        return response.data.data.ppidResponses;
      })
      .catch(function (error) {
        return;
      });

    // console.log('CHECK RESPONSE GET PPID BERKALA', JSON.stringify(getData, null, 3));

    dispatch({
      payload: getData,
      loading: false,
      success: true,
      type: DataPPIDPeriodically.GET_DATA_PPID_PERIODICALLY,
    });
  } catch (error) {
    dispatch({
      type: DataPPIDPeriodically.GET_DATA_PPID_PERIODICALLY_FAILED,
      error,
    });
  }
};
