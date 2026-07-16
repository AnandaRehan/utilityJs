import type from './type.js';

const {
	isString
} = type;

const textToHex = text => {
    if (!isString(text)) {
        return text;
    }
    return Array.from(text)
        .map(char => char.charCodeAt(0).toString(16))
        .join("");
};

export default textToHex;
