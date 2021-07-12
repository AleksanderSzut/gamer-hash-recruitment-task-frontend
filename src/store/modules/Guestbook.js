const getDefaultState = () => {
  return {
    guests: [],
  };
};

const state = getDefaultState();
export default {
  namespaced: true,
  state,
  mutations: {
    resetStates(state) {
      Object.assign(state, getDefaultState());
    },
    addGuest(state, { firstName, lastName, email, phone }) {
      state.guests.push({ firstName, lastName, email, phone });
    },
  },
  getters: {
    getGuests(state) {
      return state.guests;
    },
    getGuestsCount(state) {
      return state.guests.count;
    },
  },
};
