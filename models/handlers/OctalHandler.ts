import { Handler } from "../../abstracts/Handler";
import { convertNumberBase } from "../../utils/convertNumberBase";

export class OctalHandler extends Handler {
    public processNumber(number: string): string {
        const transformedNumber = convertNumberBase(number, '0', 8);

        if (transformedNumber) return transformedNumber;
        return this.successor.processNumber(number);
    }
}