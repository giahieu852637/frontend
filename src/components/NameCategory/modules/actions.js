import * as ActionType from "./constant";
import Axios from "axios";
import { urlApi } from "../../../config/api";

export const actGetCategoryDetailApi = (id) => {
  return (dispatch) => {
    dispatch(actCategoryDetailRequest());
    Axios({
      url: urlApi + "categories/",
      method: "GET",
    })
      .then((result) => {
        const data = result.data;
        data.map((item) => {
          if (parseInt(item.id) === parseInt(id))
            dispatch(actCategoryDetailSuccess(item));
        });
      })
      .catch((err) => {
        dispatch(actCategoryDetailFailed(err));
      });
  };
};

const actCategoryDetailRequest = () => {
  return {
    type: ActionType.LIST_CATEGORYDETAIL_REQUEST,
  };
};

const actCategoryDetailSuccess = (data) => {
  return {
    type: ActionType.LIST_CATEGORYDETAIL_SUCCESS,
    payload: data,
  };
};

const actCategoryDetailFailed = (err) => {
  return {
    type: ActionType.LIST_CATEGORYDETAIL_FAILED,
    payload: err,
  };
};
