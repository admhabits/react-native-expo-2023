import DataLoginTypes from './login.types';
import axios from 'axios';
import { BaseUrl } from '../../utils/Constants';

export const postLogin = data => async dispatch => {
  const { username, password } = data;
  let resToken;
  const token = await axios
    .post(BaseUrl + '/api/auth/login', { username, password })
    .then(function (response) {
      resToken = response.data.token;
      return response.data.token;
    })
    .catch(function (error) {
      return 'error';
    });


  try {
    const roles = await axios
      .get(`${BaseUrl}/api/user-to-roles/${username}`, {
        headers: {
          Authorization: `Bearer ${resToken}`
        }
      })
      .then(function (response) {
        return response.data.data;
      })
      .catch(function (error) {
        console.log(error);
      })

    dispatch({
      payload: { token: token, remember: data.remember, roles: roles },
      type: DataLoginTypes.POST_LOGIN,
    });
  } catch (error) {
    dispatch({
      type: DataLoginTypes.POST_LOGIN_FAILED,
      error,
    });
  }
};

export const postLogout = () => async dispatch => {
  try {
    dispatch({
      payload: null,
      type: DataLoginTypes.POST_LOGIN,
    });
  } catch (error) {
    dispatch({
      type: DataLoginTypes.POST_LOGIN_FAILED,
      error,
    });
  }
};
