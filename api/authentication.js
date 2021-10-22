export const CLOSE_SESSION = async (axios) => {
  const close = await axios({
    url: '/api/private/v1.1/logoutSesion',
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: 'Basic YXBpYWNjYWNjOlZWMWc4SnZrN3A0djVoVFBSNFZj',
    },
  })
  return close.data
}

export const sendToken = async (axios, payload) => {
  try {
    const reponseToken = await axios({
      url: '/kong/contratos/v1.0/sendToken',
      method: 'POST',
      data: payload,
      headers: {
        'content-type': 'application/json',
        Authorization: process.env.BASIC_AUTH_KONG,
      },
    })
    return reponseToken.data
  } catch (error) {
    throw new Error(
      'En estos momentos no podemos enviar el token, por favor inténtalo en unos minutos.'
    )
  }
}

export const validateToken = async (axios, payload) => {
  try {
    const responseValidate = await axios({
      url: '/v9/contratos/v1.0/contratos',
      method: 'POST',
      data: payload,
      headers: {
        'content-type': 'application/json',
        Authorization: process.env.BASIC_AUTH,
      },
    })
    return responseValidate.data
  } catch (error) {
    throw new Error(
      'En estos momentos no podemos validar el token y generar los contratos, por favor inténtelo más tarde.'
    )
  }
}

export const apiGenerarTokenNew = (axios, payload) =>
  axios.$post('/v7/private/v1.0/generarTokenNewSms', payload)

export const apiValidarTokenNew = (axios, payload) =>
  axios.$post('/v7/private/v1.0/validarTokenNew', payload)
