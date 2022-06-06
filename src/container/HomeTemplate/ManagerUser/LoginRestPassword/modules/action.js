import {
  USER_RESETLOGIN_REQUEST,
  USER_RESETLOGIN_SUCCESS,
  USER_RESETLOGIN_FAILED,
} from "./constant";

import Axios from "axios";
import { urlApi } from "../../../../../config/api";

export const fetchResetLoginApi = (data, history) => {
  return (dispatch) => {
    actLoginRequest();
    Axios({
      url: urlApi + "password-reset-complete",
      method: "PATCH",
      data: data,
    })
      .then((result) => {
        const data = result.data;
        dispatch(actLoginSuccess(data));
        history.push("/login");
      })
      .catch((err) => {
        dispatch(actLoginFailed(err.response.data));
      });
  };
};

const actLoginRequest = () => {
  return {
    type: USER_RESETLOGIN_REQUEST,
  };
};

const actLoginSuccess = (data) => {
  return {
    type: USER_RESETLOGIN_SUCCESS,
    payload: data,
  };
};

const actLoginFailed = (err) => {
  return {
    type: USER_RESETLOGIN_FAILED,
    payload: err,
  };
};
