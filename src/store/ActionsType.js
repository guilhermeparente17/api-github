import { ADD_BRANCH, ADD_BRANCH_NAME, ADD_LOGADO, ADD_REPOS, ADD_USER } from "./Actions";

export const addUser = (payload) => ({
  type: ADD_USER,
  payload: payload,
});

export const addRepos = (payload) => ({
  type: ADD_REPOS,
  payload: payload,
});

export const addLogado = (payload) => ({
  type: ADD_LOGADO,
  payload: payload,
});

export const addBranch = (payload) => ({
  type: ADD_BRANCH,
  payload: payload,
});

export const addBranchName = (payload) => ({
  type: ADD_BRANCH_NAME,
  payload: payload
})
