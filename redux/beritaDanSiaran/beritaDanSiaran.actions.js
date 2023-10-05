import DataBeritaDanSiaranTypes from './beritaDanSiaran.types';
import axios from 'axios';
import { BaseUrl } from '../../utils/Constants';

export const getDataBeritaDanSiaran = data => async dispatch => {
  // console.log(data);
  const getData = await axios
    .get(BaseUrl + `/api/post/?search=${data.search}&limit=${data.isTotalDataShow}&offset=0`, {
      headers: {
        Authorization: `Bearer ${data.token}`,
      },
    })
    .then(function (response) {
      // console.log('get data berita admin');
      // console.log(JSON.stringify(response, null, 3));
      return response;
    })
    .catch(function (error) {
      // console.log('get data berita admin error');
      // console.log(response);
      return 'error';
    });
  try {
    dispatch({
      payload: getData?.data?.data?.postsResponses,
      type: DataBeritaDanSiaranTypes.GET_DATA_BERITA_DAN_SIARAN,
    });
  } catch (error) {
    dispatch({
      type: DataBeritaDanSiaranTypes.GET_DATA_BERITA_DAN_SIARAN_FAILED,
      error,
    });
  }
};

export const deleteDataBeritaDanSiaran = data => async dispatch => {
  console.log('CHECK DATA PENGIRIMAN ', JSON.stringify(data, null, 3));

  try {
    const deleteList = await fetch(
      BaseUrl +
      `/post/delete?objectId=${data.postId}&termTaxonomyId=${data.termTaxonomyId}`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + data.token,
        },
      },
    )
      .then(response => response.json())
      .then(data => {
        console.log('berhasil1', data);
        return data;
      })
      .catch(function (error) {
        console.log('error', error);
        throw error;
      });

    console.log('cek deleteList', deleteList);

    dispatch({
      payload: deleteList,
      type: DataBeritaDanSiaranTypes.DELETE_DATA_BERITA_DAN_SIARAN,
    });
  } catch (error) {
    dispatch({
      type: DataBeritaDanSiaranTypes.DELETE_DATA_BERITA_DAN_SIARAN_FAILED,
      error,
    });
  }
};
