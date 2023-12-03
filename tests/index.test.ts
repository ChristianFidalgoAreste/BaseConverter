import { describe, it, expect } from 'vitest';
import { BaseConverter } from '../models/BaseConverter';
import { HandlerFactory } from '../models/handlers/HandlerFactory';

const handlerFactory = new HandlerFactory();
const baseConverter = new BaseConverter(handlerFactory, true);

describe('The convert function', () => {
    it.each`
        number          | expected
        ${'0xFF'}       | ${'255'}
        ${'0XFF'}       | ${'255'}
        ${'&hFF'}       | ${'255'}
        ${'&HFF'}       | ${'255'}
        ${'0xff'}       | ${'255'}
        ${'0Xff'}       | ${'255'}
        ${'&hFF'}       | ${'255'}
        ${'&Hff'}       | ${'255'}
        ${'0x2a'}       | ${'42'}
        ${'&H4e3'}      | ${'1251'}
        ${'0B101010'}   | ${'42'}
        ${'0b101010'}   | ${'42'}
        ${'0b100010'}   | ${'34'}
        ${'0b101011'}   | ${'43'}
        ${'024'}        | ${'20'}
        ${'032'}        | ${'26'}
        ${'gmamgmakdg'} | ${'Incorrect number. Please insert a correct number in a correct base'}
    `('Should convert the number ($number) to decimal base ($expected)', ({ number, expected}) => {
        expect(baseConverter.convert(number)).toBe(expected);
    });
})