export function isArray(args) {
    return Array.isArray(args);
}

export function isFunction(arg) {
    return typeof arg === "function";
}
export function isObject(arg) {
    /// return arg !== null && typeof arg == "object" && !isArray(arg);
    return Object.prototype.toString.call(arg) === "[object Object]";
}

export function isString(arg) {
    return typeof arg === "string";
}

export function isBoolean(arg) {
    return typeof arg == "boolean";
}

export function isBuffer(arg) {
    return Buffer.isBuffer(arg);
}

export function isMap(arg) {
    return arg instanceof Map;
}

export function isNumber(int) {
    return typeof int === "number" && !isNaN(int);
}

export function isPrima(int) {
    num = typeof num == "string" ? parseFloat(num) : num;
    if (!Number.isInteger(num)) return false;
    num = parseInt(num);
    if (num <= 1) {
        return false;
    }
    if (num === 2) {
        return true;
    }
    if (num % 2 === 0) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

export function isSet(arg) {
    return arg instanceof Set;
}

export function isURL(str) {
    try {
        let url = new URL(str);
        return url.protocol === "http" || url.protocol === "https";
    } catch (_) {
        return false;
    }
}

export function isBinary(str) {
    if (!str) return false;
    else if (isNumber(str)) str = str.toString();
    else if (!isString(str)) return false;
    for (let char of str) {
        if (char != "0" && char != "1") {
            return false;
        }
    }
    return true;
}

export default {
    isArray,
    isFunction,
    isObject,
    isString,
    isBoolean,
    isBuffer,
    isMap,
    isNumber,
    isPrima,
    isSet,
    isURL,
    isBinary
};
