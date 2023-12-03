import { Handler } from "../../abstracts/Handler";
import { IHandlerFactory } from "../../interfaces/IHandlerFactory";
import { BinaryHandler } from "./BinaryHandler";
import { ErrorHandler } from "./ErrorHandler";
import { HexadecimalHandler } from "./HexadecimalHandler";
import { OctalHandler } from "./OctalHandler";

export class HandlerFactory implements IHandlerFactory {
    getHandler(checkForOctal : boolean): Handler {
        const hexadecimalHandler = new HexadecimalHandler();
        const binaryHandler = new BinaryHandler();
        const octalHandler = new OctalHandler();
        const errorHandler = new ErrorHandler();

        hexadecimalHandler.setSuccessor(binaryHandler);
        if (checkForOctal) {
            binaryHandler.setSuccessor(octalHandler);
            octalHandler.setSuccessor(errorHandler);
        }
        else
            binaryHandler.setSuccessor(errorHandler);

        return hexadecimalHandler;
    }
}