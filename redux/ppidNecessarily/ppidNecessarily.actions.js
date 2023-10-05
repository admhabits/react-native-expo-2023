import DataPPIDNecessarily from './ppidNecessarily.types';
import axios from 'axios';
import {BaseUrl} from '../../utils/Constants';

export const getPPIDNecessarily = data => async dispatch => {
  try {
    const getData = await axios
      .get(BaseUrl + `/api/ppid-serta-merta?search=${data.search}`, {
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

    dispatch({
      payload: getData,
      type: DataPPIDNecessarily.GET_DATA_PPID_NECESSARILY,
    });
  } catch (error) {
    dispatch({
      type: DataPPIDNecessarily.GET_DATA_PPID_NECESSARILY_FAILED,
      error,
    });
  }
};
