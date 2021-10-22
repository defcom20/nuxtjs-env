
const error = {
  "status": "",
  "statusCode": false,
  "message": {
    "codRes": "",
    "message": ""
  }
}

export const state = () => ({
  errorStatus: error,
});

export const mutations = {
  ERROR_STATUS(state, value){
    state.errorStatus = value
  }
}

export const actions = {
  globalError ({commit}, data){
    commit('ERROR_STATUS', data)
  },
}

export const getters = {
  errorsGlobal: (state) => state.errorStatus,
};
