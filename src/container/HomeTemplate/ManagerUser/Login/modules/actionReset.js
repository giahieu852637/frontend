import Axios from "axios";
import { urlApi } from "../../../../../config/api";

export const fetchResetPasswordApi = (data, history) => {
  let datas = { email: data };
  return (dispatch) => {
    Axios({
      url: urlApi + "request-reset-email/",
      method: "POST",
      data: datas,
    })
      .then((result) => {})
      .catch((err) => {});
  };
};
