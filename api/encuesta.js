const URL_KONG = process.env.BASE_URL_KONG


export const apiValidacion = (axios, payload) =>
  axios.$get(`${URL_KONG}/encuestasLanding/validate/${payload}`);

export const apiEncuesta = (axios, payload) =>
  axios.$post(`${URL_KONG}/encuestasLanding/addAll`, payload);
