import {
  USER_RESETLOGIN_REQUEST,
  USER_RESETLOGIN_SUCCESS,
  USER_RESETLOGIN_FAILED,
} from "./constant";

let initialState = {
  loading: false,
  data: null,
  err: null,
};

const userResetLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_RESETLOGIN_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };

    case USER_RESETLOGIN_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };

    case USER_RESETLOGIN_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default userResetLoginReducer;
