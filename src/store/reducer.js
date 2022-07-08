import { ADD_LOGADO, ADD_USER } from "./Actions";

const initialState = {
  user: {},
  repos: [],
  logado: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_USER:
      return { ...state, user: payload };
    case ADD_LOGADO:
      return { ...state, logado: payload };
    default:
      return state;
  }
};

export default reducer;
