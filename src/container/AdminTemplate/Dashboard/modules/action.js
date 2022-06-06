import * as ActionType from "./constant";
import Axios from "axios";
import { urlApi } from "../../../../config/api";

export const actListHoSoApi = (page) => {
  console.log(page);
  let access_token = JSON.parse(localStorage.getItem("access_token"));
  return (dispatch) => {
    dispatch(actListHoSoRequest());
    Axios({
      url: urlApi + "nophosos/?page=" + page,
      headers: {
        Authorization: "Bearer " + access_token,
      },
      method: "GET",
    })
      .then((result) => {
        dispatch(actListHoSoSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actListHoSoFailed(err));
      });
  };
};

const actListHoSoRequest = () => {
  return {
    type: ActionType.LIST_HOSO_REQUEST,
  };
};

const actListHoSoSuccess = (data) => {
  return {
    type: ActionType.LIST_HOSO_SUCCESS,
    payload: data,
  };
};

const actListHoSoFailed = (err) => {
  return {
    type: ActionType.LIST_HOSO_FAILED,
    payload: err,
  };
};
