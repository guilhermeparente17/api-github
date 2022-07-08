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
};

export default SelectorsData;
