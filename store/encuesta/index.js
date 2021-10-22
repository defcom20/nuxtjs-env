import { apiEncuesta, apiValidacion } from '~/api/encuesta'
import { codPage, pagesEncuesta } from '~/enums/encuesta-enums'
export const state = () => ({
  step: codPage.EVALUATION,
  datosEncuesta: [],
  datosCliente: [],
  respuesta: [],
  productCode: -1
});

export const mutations = {
  SET_STEP(state, value) {
    state.step = value
  },
  ENCUESTA_DATA(state, value) {
    state.datosEncuesta = value;
  },
  DATA_CLIENTE(state, value) {
    state.datosCliente = value;
  },
  RESPUESTA_VALIDACION(state, value) {
    state.respuesta = value;
  },
  CLEAR_ALL(state) {
    state.step = codPage.EVALUATION
    state.datosEncuesta = ''
    state.datosCliente = []
    state.respuesta = []
  },

};

export const actions = {
  async evaluacionCliente({ commit }, data) {
    commit('DATA_CLIENTE', data)
    try {
      this.$showSpinner(true)
      const response = await apiValidacion(this.$axios, data.documento)
      commit('RESPUESTA_VALIDACION', response)
      this.$showSpinner(false)
    } catch (error) {
      this.$showSpinner(false)
      throw error
    }
  },
  async evaluacionEncuesta({ commit, state }, data) {
    try {
      this.$showSpinner(true)
      const resp = Object.assign(state.datosCliente, data)
      const response = await apiEncuesta(this.$axios, resp)
      commit('ENCUESTA_DATA', response)
      this.$showSpinner(false)
    } catch (error) {
      this.$showSpinner(false)
      throw error
    }
  }
}
export const getters = {
  currentComponent: (state) => pagesEncuesta.find((p) => p.step === state.step),
  fechaFabricacion: (state) => state.datosCliente,
  respuestaValidation: (state) => state.respuesta,
  productCode: (state) => state.productCode,
  estadoRespuesta: (state) => state.respuesta.codRes,
};


