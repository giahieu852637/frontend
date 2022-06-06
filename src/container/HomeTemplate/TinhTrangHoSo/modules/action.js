import * as ActionType from "./constant";
import Axios from "axios";
import { urlApi } from "../../../../config/api";

export const actStatusHoSoApi = () => {
  let access_token = JSON.parse(localStorage.getItem("access_token"));
  return (dispatch) => {
    dispatch(actStatusHoSoRequest());
    Axios({
      url: urlApi + "statuss/getstatus/",
      headers: {
        Authorization: "Bearer " + access_token,
      },
      method: "GET",
    })
      .then((result) => {
        dispatch(actStatusHoSoSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actStatusHoSoFailed(err));
      });
  };
};

const actStatusHoSoRequest = () => {
  return {
    type: ActionType.STATUS_HOSO_REQUEST,
  };
};

const actStatusHoSoSuccess = (data) => {
  return {
    type: ActionType.STATUS_HOSO_SUCCESS,
    payload: data,
  };
};

const actStatusHoSoFailed = (err) => {
  return {
    type: ActionType.STATUS_HOSO_FAILED,
    payload: err,
  };
};
