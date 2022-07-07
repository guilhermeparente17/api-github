import { ADD_USER } from "./Actions";

const initialState = {
  user: {},
  repos: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_USER:
      return { ...state, user: payload };
    default:
      return state;
  }
};

export default reducer;
