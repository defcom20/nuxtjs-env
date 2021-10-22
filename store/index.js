//import { CLOSE_SESSION } from '~/api/authentication';
export const strict = false

export const state = () => ({
  isLoading: false,
  isError: false,
});

export const mutations = {
  SET_ISLOADING(state, value) {
    state.isLoading = value;
  },
  SET_IS_ERROR(state, value) {
    state.isError = value;
  }
}

export const actions = {
  
}

export const getters = {
  error: (state) => state.isError
};


