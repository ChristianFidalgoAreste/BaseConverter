import { Handler } from "../../abstracts/Handler";

export class ErrorHandler extends Handler {
    public processNumber(number: string): string {
        return 'Incorrect number. Please insert a correct number in a correct base';
    }
}