import * as ActionType from "./constant";
import Axios from "axios";
import { urlApi } from "../../../../../config/api";

export const actListQuestionThuongGapApi = (title) => {
  let urls = "thuonggap/";
  if (title !== "") urls = "thuonggap/?q=" + title;

  return (dispatch) => {
    dispatch(actListQuestionThuongGapApiRequest());
    Axios({
      url: urlApi + urls,
      method: "GET",
    })
      .then((result) => {
        if (result.data)
          dispatch(actListQuestionThuongGapApiSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actListQuestionThuongGapApiFailed(err));
      });
  };
};

const actListQuestionThuongGapApiRequest = () => {
  return {
    type: ActionType.LIST_QUESTION_THUONGGAP_REQUEST,
  };
};

const actListQuestionThuongGapApiSuccess = (data) => {
  return {
    type: ActionType.LIST_QUESTION_THUONGGAP_SUCCESS,
    payload: data,
  };
};

const actListQuestionThuongGapApiFailed = (err) => {
  return {
    type: ActionType.LIST_QUESTION_THUONGGAP_FAILED,
    payload: err,
  };
};
