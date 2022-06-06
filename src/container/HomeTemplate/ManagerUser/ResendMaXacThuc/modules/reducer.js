import {
  USER_RESEND_REQUEST,
  USER_RESEND_SUCCESS,
  USER_RESEND_FAILED,
} from "./constant";

let initialState = {
  loading: false,
  data: null,
  err: null,
};

const userResendReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_RESEND_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };

    case USER_RESEND_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };

    case USER_RESEND_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default userResendReducer;
