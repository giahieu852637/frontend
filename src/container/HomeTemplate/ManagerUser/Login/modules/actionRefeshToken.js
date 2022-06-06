import Axios from "axios";
import { urlApi } from "../../../../../config/api";

export const fetchRefeshTokenApi = () => {
  var refresh = JSON.parse(localStorage.getItem("refresh_token"));
  return (dispatch) => {
    Axios({
      url: urlApi + "token/refresh/",
      method: "POST",
      data: refresh,
    })
      .then((result) => {
        const data = result.data;
        localStorage.setItem("access_token", JSON.stringify(data.access));
      })
      .catch((err) => {});
  };
};
