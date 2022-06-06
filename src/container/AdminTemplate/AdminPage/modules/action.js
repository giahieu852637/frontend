import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
} from "./constant";
import Axios from "axios";
import { urlApi } from "../../../../config/api";

export const fetchLoginAdminApi = (user, history) => {
  return (dispatch) => {
    actLoginRequest();
    Axios({
      url: urlApi + "login/",
      method: "POST",
      data: user,
    })
      .then((result) => {
        const data = result.data;
        localStorage.setItem("userKH", JSON.stringify(data));
        localStorage.setItem(
          "access_token",
          JSON.stringify(data.tokens.access)
        );
        localStorage.setItem(
          "refresh_token",
          JSON.stringify(data.tokens.refresh)
        );
        dispatch(actLoginSuccess(data));
        history.push("/admin/dashboard");
      })
      .catch((err) => {
        dispatch(actLoginFailed(err));
      });
  };
};

const actLoginRequest = () => {
  return {
    type: USER_LOGIN_REQUEST,
  };
};

const actLoginSuccess = (data) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: data,
  };
};

const actLoginFailed = (err) => {
  return {
    type: USER_LOGIN_FAILED,
    payload: err,
  };
};
