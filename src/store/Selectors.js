const SelectorsData = {
  getUser(state) {
    return state?.user;
  },

  getRpos(state) {
    return state?.repos;
  },

  getLogado(state) {
    return state?.logado;
  },
  getBranch(state) {
    return state?.branch;
  },
  getBranchName(state) {
    return state?.branchName;
  },
};

export default SelectorsData;
