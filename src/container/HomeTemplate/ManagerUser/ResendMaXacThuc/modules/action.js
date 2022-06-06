import {
  USER_RESEND_REQUEST,
  USER_RESEND_SUCCESS,
  USER_RESEND_FAILED,
} from "./constant";
import Axios from "axios";
import { urlApi } from "../../../../../config/api";

export const fetchResendApi = (user, history) => {
  return (dispatch) => {
    actResendRequest();
    Axios({
      url: urlApi + "re-email-verify/",
      method: "POST",
      data: user,
    })
      .then((result) => {
        const data = result.data;
        dispatch(actResendSuccess("Vui lòng check mail"));
      })
      .catch((err) => {
        dispatch(actResendFailed(err.response.data));
      });
  };
};

const actResendRequest = () => {
  return {
    type: USER_RESEND_REQUEST,
  };
};

const actResendSuccess = (data) => {
  return {
    type: USER_RESEND_SUCCESS,
    payload: data,
  };
};

const actResendFailed = (err) => {
  return {
    type: USER_RESEND_FAILED,
    payload: err,
  };
};
