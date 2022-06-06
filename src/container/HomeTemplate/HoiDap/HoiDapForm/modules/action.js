import * as ActionType from "./constant";
import Axios from "axios";
import { urlApi } from "../../../../../config/api";

export const actQuestionApi = (data, histoty) => {
  let access_token = JSON.parse(localStorage.getItem("access_token"));
  return (dispatch) => {
    dispatch(actQuestionApiRequest());
    Axios({
      url: urlApi + "question/add_question/",
      headers: {
        Authorization: "Bearer " + access_token,
      },
      method: "POST",
      data,
    })
      .then((result) => {
        if (result.data) dispatch(actQuestionApiSuccess(result.data));
        histoty.push("/hoidap");
      })
      .catch((err) => {
        dispatch(actQuestionApiFailed(err));
      });
  };
};

const actQuestionApiRequest = () => {
  return {
    type: ActionType.QUESTION_REQUEST,
  };
};

const actQuestionApiSuccess = (data) => {
  return {
    type: ActionType.QUESTION_SUCCESS,
    payload: data,
  };
};

const actQuestionApiFailed = (err) => {
  return {
    type: ActionType.QUESTION_FAILED,
    payload: err,
  };
};
