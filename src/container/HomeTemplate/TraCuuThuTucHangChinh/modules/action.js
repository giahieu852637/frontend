import * as ActionType from "./constant";
import Axios from "axios";
import { urlApi } from "../../../../config/api";

export const actGetCategoryApi = () => {
  return (dispatch) => {
    dispatch(actCategoryRequest());
    Axios({
      url: urlApi + "categories/",
      method: "GET",
    })
      .then((result) => {
        const data = result;
        if (data) dispatch(actCategorySuccess(result.data));
      })
      .catch((err) => {
        dispatch(actCategoryFailed(err));
      });
  };
};

const actCategoryRequest = () => {
  return {
    type: ActionType.LIST_CATEGORY_REQUEST,
  };
};

const actCategorySuccess = (data) => {
  return {
    type: ActionType.LIST_CATEGORY_SUCCESS,
    payload: data,
  };
};

const actCategoryFailed = (err) => {
  return {
    type: ActionType.LIST_CATEGORY_FAILED,
    payload: err,
  };
};

export const actGetFieldApi = (category_id) => {
  return (dispatch) => {
    dispatch(actFieldRequest());
    Axios({
      url: urlApi + "fields/?category_id=" + category_id,
      method: "GET",
    })
      .then((result) => {
        const data = result;
        if (data) {
          dispatch(actFieldSuccess(result.data));
        }
      })
      .catch((err) => {
        dispatch(actFieldFailed(err));
      });
  };
};
const actFieldRequest = () => {
  return {
    type: ActionType.LIST_FIELD_REQUEST,
  };
};

const actFieldSuccess = (data) => {
  return {
    type: ActionType.LIST_FIELD_SUCCESS,
    payload: data,
  };
};

const actFieldFailed = (err) => {
  return {
    type: ActionType.LIST_FIELD_FAILED,
    payload: err,
  };
};

export const actGetHoSoApi = (field_id) => {
  return (dispatch) => {
    dispatch(actHoSoRequest());
    Axios({
      url: urlApi + "filehosos/?field_id=" + field_id,
      method: "GET",
    })
      .then((result) => {
        const data = result;
        if (data) {
          dispatch(actHoSoSuccess(result.data));
        }
      })
      .catch((err) => {
        dispatch(actHoSoFailed(err));
      });
  };
};
const actHoSoRequest = () => {
  return {
    type: ActionType.LIST_HOSO_REQUEST,
  };
};

const actHoSoSuccess = (data) => {
  return {
    type: ActionType.LIST_HOSO_SUCCESS,
    payload: data,
  };
};

const actHoSoFailed = (err) => {
  return {
    type: ActionType.LIST_HOSO_FAILED,
    payload: err,
  };
};
