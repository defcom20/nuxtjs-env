export class NoContentError extends Error {
    constructor({ statusCode='', message='' }) {
      super({ statusCode, message });
      this.name = 'NoContentError';
      this.message = message;
      this.statusCode = statusCode;
    }
  }
  
  export class BadRequestError extends Error {
    constructor({ statusCode='', message='' }) {
      super({ statusCode, message });
      this.name = 'BadRequestError';
      this.message = 'Parametros invalidos';
      this.statusCode = statusCode;
    }
  }
  
  export class UnauthorizedError extends Error {
    constructor({ statusCode='', message='' }) {
      super({ statusCode, message });
      this.name = 'UnauthorizedError';
      this.message = 'Tu sesión ha expirado Vuelve a iniciar sesión';
      this.statusCode = statusCode;
    }
  }
  
  export class ForbiddenError extends Error {
    constructor({ statusCode='', message='' }) {
      super({ statusCode, message });
      this.name = 'ForbiddenError';
      this.message = 'Permisos insuficientes! Lo sentimos, pero por el momento no puedes proceder con la acción';
      this.statusCode = statusCode;
    }
  }
  
  export class NotFoundError extends Error {
    constructor({ statusCode='', message='' }) {
      super({ statusCode, message });
      this.name = 'NotFoundError';
      this.message = message;
      this.statusCode = statusCode;
    }
  }
  
  export class ConflictError extends Error {
    constructor({ statusCode='', message='' }) {
      super({ statusCode, message });
      this.name = 'ConflictError';
      this.message = message;
      this.statusCode = statusCode;
    }
  }
  
  export class InternalServerError extends Error {
    constructor({ statusCode='', message='' }) {
      super({ statusCode, message });
      this.name = 'InternalServerError';
      this.message = 'Ocurrio un error en el servidor';
      this.statusCode = statusCode;
    }
  }
  
  export class GatewayTimeoutError extends Error {
    constructor({ statusCode='', message='' }) {
      super({ statusCode, message });
      this.name = 'GatewayTimeoutError';
      this.message = 'Error de conexión. Por el momento no podemos conectarnos a los servicios del sistema';
      this.statusCode = statusCode;
    }
  }
  
  export class UnknownError extends Error {
    constructor({ statusCode='', message='' }) {
      super({ statusCode, message });
      this.name = 'UnknownError';
      this.message = 'Ocurrio un error con su solicitud';
      this.statusCode = statusCode;
    }
  }
  
  export class CodeResponseError extends Error {
    constructor({ statusCode='', message='' }) {
      super({ statusCode, message });
      this.name = 'CodeResponseError';
      this.message = 'Lo sentimos, En estos momentos no podemos procesar tu solicitud, por favor inténtalo en unos minutos';
      this.statusCode = statusCode;
    }
  }
  
  export class JsonWebTokenError extends Error {
    constructor({ statusCode='', message='' }) {
      super({ statusCode, message });
      this.name = 'JsonWebTokenError';
      this.message = 'Lo sentimos, Asegúrese de usar correctamente el enlace.';
      this.statusCode = statusCode;
    }
  }
  
  export class TokenExpiredError extends Error {
    constructor({ statusCode='', message='' }) {
      super({ statusCode, message });
      this.name = 'TokenExpiredError';
      this.message = 'Lo sentimos, Se venció el tiempo para acceder al enlace.';
      this.statusCode = statusCode;
    }
  }
  
  export class SocketTimedOut extends Error {
    constructor({ statusCode='', message='' }) {
      super({ statusCode, message });
      this.name = 'SocketTimedOut';
      this.message = 'tiempo maximo de espera';
      this.statusCode = '99';
    }
  }
  