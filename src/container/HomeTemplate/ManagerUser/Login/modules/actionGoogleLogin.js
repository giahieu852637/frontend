import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
} from "./constant";
import { USER_RESEND_SUCCESS } from "../../ResendMaXacThuc/modules/constant";
import Axios from "axios";
import { urlApi } from "../../../../../config/api";

export const fetchGoogleLoginApi = (auth_tokens, history) => {
  let datas = { auth_token: auth_tokens };
  return (dispatch) => {
    actLoginRequest();
    Axios({
      url: urlApi + "google/",
      method: "POST",
      data: datas,
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
        history.push("/");
      })
      .catch((err) => {
        dispatch(actLoginFailed("Thành công vui lòng đăng nhập"));
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
