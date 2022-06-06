import * as ActionType from "./constant";
import Axios from "axios";
import { urlApi } from "../../../../config/api";

export const actSearchHoSoApi = (param) => {
  return (dispatch) => {
    dispatch(actSearchHoSoRequest());
    Axios({
      url: urlApi + "filehosos/?q=" + param,
      method: "GET",
    })
      .then((result) => {
        dispatch(actSearchHoSoSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actSearchHoSoFailed(err));
      });
  };
};

const actSearchHoSoRequest = () => {
  return {
    type: ActionType.SEARCH_HOSO_REQUEST,
  };
};

const actSearchHoSoSuccess = (data) => {
  return {
    type: ActionType.SEARCH_HOSO_SUCCESS,
    payload: data,
  };
};

const actSearchHoSoFailed = (err) => {
  return {
    type: ActionType.SEARCH_HOSO_FAILED,
    payload: err,
  };
};
