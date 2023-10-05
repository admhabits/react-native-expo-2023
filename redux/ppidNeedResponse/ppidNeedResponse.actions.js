import axios from "axios";
import PPIDNeedResponseTypes from "./ppidNeedResponse.types";
import {BaseUrl} from '../../utils/Constants';

const getPPIDNeedResponse = (data) => async dispatch => {
    try {
        const getData = await axios
          .get(BaseUrl + '/api/list-ppid-need-response', {
            headers: {
              Authorization: `Bearer ${data}`,
            },
          })
          .then(function (response) {
            return response.data.data.questionsResponses;
          })
          .catch(function (error) {
            return;
          });
    
        dispatch({
          payload: getData,
          type: PPIDNeedResponseTypes.GET_PPID_NEED_RESPONSE,
        });
      } catch (error) {
        dispatch({
          type: PPIDNeedResponseTypes.GET_PPID_NEED_RESPONSE_FAILED,
          error,
        });
      }
}

export default getPPIDNeedResponse;