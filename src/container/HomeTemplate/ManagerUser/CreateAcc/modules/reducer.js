import {
  USER_CREATE_REQUEST,
  USER_CREATE_SUCCESS,
  USER_CREATE_FAILED,
} from "./constant";

let initialState = {
  loading: false,
  data: null,
  err: null,
};

const userCreateReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_CREATE_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };

    case USER_CREATE_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };

    case USER_CREATE_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default userCreateReducer;
