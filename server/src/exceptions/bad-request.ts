import { ErrorCode, HttpException } from "./root";

// ERROR CLASS TO BUILD BAD REQUEST ERROR RESPONSE OBJECT
export class BadRequestException extends HttpException{
    constructor(message: string,errorCode:ErrorCode) {
        super(message, errorCode, 400, null);
        this.name = "BadRequest";
    }
}