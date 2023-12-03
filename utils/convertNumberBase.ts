export function convertNumberBase(number : string, prefix : string, base : number) {
    if (number.startsWith(prefix.toLowerCase()))
        return parseInt(number.substring(prefix.length), base).toString();
    return '';
}
