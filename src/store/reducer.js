import { ADD_BRANCH, ADD_BRANCH_NAME, ADD_LOGADO, ADD_USER } from "./Actions";

const initialState = {
  user: {},
  repos: [],
  branch: {},
  branchName: '',
  logado: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_USER:
      return { ...state, user: payload };
    case ADD_LOGADO:
      return { ...state, logado: payload };
    case ADD_BRANCH:
      return { ...state, branch: payload };
    case ADD_BRANCH_NAME:
      return {...state, branchName: payload};
    default:
      return state;
  }
};

export default reducer;
