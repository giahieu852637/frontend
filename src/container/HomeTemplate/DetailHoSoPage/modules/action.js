import * as ActionType from "./constant";
import Axios from "axios";
import { urlApi } from "../../../../config/api";

export const actGetDetailHoSoApi = (id) => {
  return (dispatch) => {
    dispatch(actDetailHoSoRequest());
    Axios({
      url: urlApi + "filehosos/" + id + "/",
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
