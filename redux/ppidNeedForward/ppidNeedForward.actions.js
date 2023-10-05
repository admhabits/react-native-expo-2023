import axios from "axios";
import PPIDNeedResponseTypes from "./ppidNeedForward.types";
import {BaseUrl} from '../../utils/Constants';

const getPPIDNeedForward = (data) => async dispatch => {
    try {
        const getData = await axios
          .get(BaseUrl + '/api/list-ppid-need-action', {
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
          type: PPIDNeedResponseTypes.GET_PPID_NEED_FORWARD,
        });
      } catch (error) {
        dispatch({
          type: PPIDNeedResponseTypes.GET_PPID_NEED_FORWARD_FAILED,
          error,
        });
      }
}

export default getPPIDNeedForward;