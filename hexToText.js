import type from 'https://cdn.jsdelivr.net/gh/AnandaRehan/utilityJs@main/type.js';

const {
	isString
} = type;

function hexToText(hex, per = 2) {
    if (!isString(hex)) {
        return hex;
    }
    const regex = new RegExp(`.{1,${per}}`, "g");
    if (!hex) return "";
    return hex
        .match(regex)
        .map(byte => String.fromCharCode(parseInt(byte, 16)))
        .join("");
}

export default hexToText;
