export const getNameUsers = async (axios, codigoProspecto) => {
  try {
    const response = await axios({
      url: `/v4/prospecto/v2.0/users/lde/${codigoProspecto}`,
      method: 'GET',
      data: {},
      headers: {
        Authorization: process.env.BASIC_AUTH
      }
    })
    return response.data
  } catch (error) {
    throw new Error('En estos momentos no podemos procesar tu solicitud, por favor inténtelo más tarde.')
  }
}
