import { Handler } from "../abstracts/Handler";

export interface IHandlerFactory {
    getHandler(checkForOctal : boolean) : Handler;
}