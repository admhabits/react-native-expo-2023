import axios from 'axios';
import { BaseUrl } from '../../utils/Constants';
import PPIDAllTimeActionTypes from './types';

export const getPPIDAllTime = (data) => async dispatch => {
  await axios.get(BaseUrl + `/api/public/ppid/ppid-setiap-saat?search=${data.search}`)
    .then(function (response) {
      const res = response.data.data;
      // console.log("CHECKING RESPONSE : ", res.ppidResponses)
      dispatch({
        type: PPIDAllTimeActionTypes.GET_DATA_PPID_ALL_TIME,
        payload: res?.ppidResponses,
      });
    })
    .catch(function (error) {
      return console.log(error);
    });
};
