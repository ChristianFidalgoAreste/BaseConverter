import { Handler } from "../../abstracts/Handler";
import { convertNumberBase } from "../../utils/convertNumberBase";

export class HexadecimalHandler extends Handler {
    public processNumber(number : string): string {
        const transformedNumberWith0x = convertNumberBase(number, '0x', 16);
        const transformedNumberWithAndH = convertNumberBase(number, '&H', 16);

        if (transformedNumberWith0x) return transformedNumberWith0x;
        else if (transformedNumberWithAndH) return transformedNumberWithAndH;
        else return this.successor.processNumber(number);
    }
}