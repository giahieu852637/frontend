import { USER_CREATE_REQUEST, USER_CREATE_FAILED } from "./constant";
import { USER_RESEND_SUCCESS } from "../../ResendMaXacThuc/modules/constant";
import Axios from "axios";
import { urlApi } from "../../../../../config/api";

export const fetchCreateApi = (user, history) => {
  return (dispatch) => {
    dispatch(actCreateRequest());
    Axios({
      url: urlApi + "register/",
      method: "POST",
      data: user,
    })
      .then((result) => {
        if (result) {
          dispatch(actResendSuccess("Vui lòng check mail"));
          history.push("/login");
        }
      })
      .catch((err) => {
        dispatch(actCreateFailed(err.response.data));
      });
  };
};

const actCreateRequest = () => {
  return {
    type: USER_CREATE_REQUEST,
  };
};

const actCreateFailed = (err) => {
  return {
    type: USER_CREATE_FAILED,
    payload: err,
  };
};
const actResendSuccess = (data) => {
  return {
    type: USER_RESEND_SUCCESS,
    payload: data,
  };
};
