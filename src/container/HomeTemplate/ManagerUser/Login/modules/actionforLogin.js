import { USER_LOG_OUT } from "./constant";

export const createAction = (type, payload) => ({
  type,
  payload,
});

export const LogoutApi = () => {
  return (dispatch) => {
    dispatch(actLogoutApi());
    localStorage.removeItem("userKH");
  };
};

const actLogoutApi = () => {
  return {
    type: USER_LOG_OUT,
    payload: null,
  };
};
