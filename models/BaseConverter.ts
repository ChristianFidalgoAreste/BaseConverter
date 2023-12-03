import { IHandlerFactory } from "../interfaces/IHandlerFactory";

export class BaseConverter {
    private handlerFactory : IHandlerFactory;
    private checkForOctal = false;

    public constructor (handlerFactory : IHandlerFactory, checkForOctal ?: boolean) {
        this.handlerFactory = handlerFactory;
        if (checkForOctal) this.checkForOctal = checkForOctal;
    }

    public convert(number : string) {
        const handler = this.handlerFactory.getHandler(this.checkForOctal);

        return handler.processNumber(number.toLowerCase());
    }
}