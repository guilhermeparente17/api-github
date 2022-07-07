import { ADD_REPOS, ADD_USER } from "./Actions";

export const addUser = (payload) => ({
  type: ADD_USER,
  payload: payload,
});

export const addRepos = (payload) => ({
  type: ADD_REPOS,
  payload: payload,
});