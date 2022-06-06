import * as ActionType from "./constant";
import Axios from "axios";
import { urlApi } from "../../../../config/api";

export const actNopHoSoApi = (data, histoty) => {
  let access_token = JSON.parse(localStorage.getItem("access_token"));
  return (dispatch) => {
    dispatch(actNopHoSoApiRequest());
    Axios({
      url: urlApi + "nophosos/nop_hoso/",
      headers: {
        Authorization: "Bearer " + access_token,
        "content-type": "multipart/form-data",
      },
      method: "POST",
      data,
    })
      .then((result) => {
        if (result.data) dispatch(actNopHoSoApiSuccess(result.data));
      })
      .catch((err) => {
        let errr = "Vui lòng nhập đầy đủ thong tin";
        dispatch(actNopHoSoApiFailed(errr));
      });
  };
};

const actNopHoSoApiRequest = () => {
  return {
    type: ActionType.LIST_NOPHOSO_REQUEST,
  };
};

const actNopHoSoApiSuccess = (data) => {
  return {
    type: ActionType.LIST_NOPHOSO_SUCCESS,
    payload: data,
  };
};

const actNopHoSoApiFailed = (err) => {
  return {
    type: ActionType.LIST_NOPHOSO_FAILED,
    payload: err,
  };
};
