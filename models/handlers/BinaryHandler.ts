import { Handler } from "../../abstracts/Handler";
import { convertNumberBase } from "../../utils/convertNumberBase";

export class BinaryHandler extends Handler {
    public processNumber(number: string): string {
        const transformedNumber = convertNumberBase(number, '0b', 2);

        if (transformedNumber) return transformedNumber;
        return this.successor.processNumber(number);
    }
}