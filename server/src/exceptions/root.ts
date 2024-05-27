

//ERROR CLASS TO BUILD ERROR RESPONSE OBJECT
export class HttpException extends Error {
  message: string;
  errorCode: ErrorCode;
  statusCode: number;
  errors: any;
  constructor( 
    message: string,
    errorCode: ErrorCode,
    statusCode: number,
    errors?: any
  ) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    this.errorCode = errorCode;
    this.errors = errors;
  }
}


//DEFINED ERROR CODES FOR THIS API
export enum ErrorCode {
  USER_NOT_FOUND = 2094,
  USER_ALREADY_EXISTS = 2095,
  INVALID_CREDENTIALS = 2096,
  VALIDATION_ERROR = 2190,
}
