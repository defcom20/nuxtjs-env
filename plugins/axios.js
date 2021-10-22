import {
  BadRequestError,
  ForbiddenError,
  InternalServerError,
  NoContentError,
  NotFoundError,
  UnauthorizedError,
  UnknownError,
  GatewayTimeoutError,    
  ConflictError,
  CodeResponseError,
} from "~/errors";
import { ResponseCode, actionsByResponseCode } from '~/enums/global-enums';

export default ({ $axios, store }, inject) => {
  /* $axios.onRequest(config => {
    config.headers.common["Authorization"] = `bearer`;
    config.validateStatus = status => true;
    return config;
  }); */  

  $axios.onResponse(response => {
    const { data, status } = response;
    const { codRes } = data;
    if((status == 200 || status == 201) ) {
      return response;
    } else {
      //throw new CodeResponseError({ statusCode: ResponseCode.ERROR, ...actionsByResponseCode[codRes] });
    }    
  });

  $axios.onError(error => {
    console.log('ummm aqui si es el onError')
    const statusCode = parseInt(error.response && error.response.status)
    switch (statusCode) {       
      case 204: throw new NoContentError({ statusCode });
      case 400: throw new BadRequestError({ statusCode });
      case 401: throw new UnauthorizedError({ statusCode });
      case 403: throw new ForbiddenError({ statusCode });
      case 404: throw new NotFoundError({ statusCode });
      case 409: throw new ConflictError({ statusCode });
      case 500: throw new InternalServerError({ statusCode });
      case 504: throw new GatewayTimeoutError({ statusCode });
      default:  throw new UnknownError({ statusCode });
    }
  });
};

