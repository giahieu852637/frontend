import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOG_OUT,
} from "./constant";

let initialState = {
  loading: false,
  data: null,
  err: null,
};

const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };

    case USER_LOGIN_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };

    case USER_LOGIN_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };

    case USER_LOG_OUT:
      state.loading = false;
      state.data = null;
      state.err = null;
      return { ...state };

    default:
      return { ...state };
  }
};

export default userLoginReducer;
