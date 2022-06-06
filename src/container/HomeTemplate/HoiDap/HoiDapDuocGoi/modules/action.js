import * as ActionType from "./constant";
import Axios from "axios";
import { urlApi } from "../../../../../config/api";

export const actListQuestionApi = () => {
  let access_token = JSON.parse(localStorage.getItem("access_token"));
  return (dispatch) => {
    dispatch(actListQuestionApiRequest());
    Axios({
      url: urlApi + "question/views/",
      headers: {
        Authorization: "Bearer " + access_token,
      },
      method: "GET",
    })
      .then((result) => {
        if (result.data) dispatch(actListQuestionApiSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actListQuestionApiFailed(err));
      });
  };
};

const actListQuestionApiRequest = () => {
  return {
    type: ActionType.LIST_QUESTION_REQUEST,
  };
};

const actListQuestionApiSuccess = (data) => {
  return {
    type: ActionType.LIST_QUESTION_SUCCESS,
    payload: data,
  };
};

const actListQuestionApiFailed = (err) => {
  return {
    type: ActionType.LIST_QUESTION_FAILED,
    payload: err,
  };
};
