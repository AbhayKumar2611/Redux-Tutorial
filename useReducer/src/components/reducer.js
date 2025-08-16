import { FETCH_LOADING, FETCH_SUCCESS, FETCH_FAILURE } from "./actionTypes";

export const reducer = (state, action) => {
  console.log(action);
  console.log(action.type);
  console.log(action.payload);

  // newState
  switch (action.type) {
    // actions -> loading, success, failure...
    case FETCH_LOADING:
      return {
        posts: [],
        loading: true,
        error: "",
      };

    case FETCH_SUCCESS:
      return {
        posts: action.payload,
        loading: false,
        error: "",
      };

    case FETCH_FAILURE:
      return {
        posts: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
