import * as ActionType from "./constant";
import Axios from "axios";
import { urlApi } from "../../../../../config/api";

export const actChitieTinhtrangDetailHoSoApi = (id) => {
  let access_token = JSON.parse(localStorage.getItem("access_token"));
  return (dispatch) => {
    dispatch(actDetailHoSoRequest());
    Axios({
      url: urlApi + "nophosos/" + id + "/view/",
      headers: {
        Authorization: "Bearer " + access_token,
      },
      method: "GET",
    })
      .then((result) => {
        const data = result;
        if (data) dispatch(actDetailHoSoSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actDetailHoSoFailed(err));
      });
  };
};

const actDetailHoSoRequest = () => {
  return {
    type: ActionType.LIST_DETAILHOSO_REQUEST,
  };
};

const actDetailHoSoSuccess = (data) => {
  return {
    type: ActionType.LIST_DETAILHOSO_SUCCESS,
    payload: data,
  };
};

const actDetailHoSoFailed = (err) => {
  return {
    type: ActionType.LIST_DETAILHOSO_FAILED,
    payload: err,
  };
};
