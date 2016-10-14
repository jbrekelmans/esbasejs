"use strict";
function isIntegralDouble(value) {
    return typeof value === "number" && value % 1 === 0;
}
exports.isIntegralDouble = isIntegralDouble;
function assert(flag) {
    if (!flag) {
        throw new Error();
    }
}
exports.assert = assert;
function isFiniteDouble(value) {
    return typeof value === "number" && -1 / 0 < value && value < 1 / 0;
}
exports.isFiniteDouble = isFiniteDouble;
var Object_prototype_toString = Object.prototype.toString;
function isFunction(value) {
    return Object_prototype_toString.call(value) === "[object Function]";
}
exports.isFunction = isFunction;
exports.isArray = Array.isArray;
if (!isFunction(exports.isArray)) {
    exports.isArray = function (value) { return Object_prototype_toString.call(value) === "[object Array]"; };
}
exports.double_log10 = Math.log10;
if (!isFunction(exports.double_log10)) {
    var log_1 = Math.log;
    var LOG10E_1 = Math.LOG10E;
    exports.double_log10 = function (x) { return log_1(x) * LOG10E_1; };
}
var double_floor = Math.floor;
var double_ceil = Math.ceil;
function double_roundToZero(x) {
    return (x < 0 ? double_ceil : double_floor)(x);
}
exports.double_roundToZero = double_roundToZero;
function double_roundAwayFromZero(x) {
    return (x < 0 ? double_floor : double_ceil)(x);
}
exports.double_roundAwayFromZero = double_roundAwayFromZero;
var Array_prototype_slice = Array.prototype.slice;
function toArray(value) {
    if (exports.isArray(value))
        return value;
    return Array_prototype_slice.call(value, 0);
}
exports.toArray = toArray;
(function (RoundingMode) {
    RoundingMode[RoundingMode["AWAY_FROM_ZERO"] = 0] = "AWAY_FROM_ZERO";
    RoundingMode[RoundingMode["BANKERS"] = 1] = "BANKERS";
    RoundingMode[RoundingMode["MP_AWAY_FROM_ZERO"] = 2] = "MP_AWAY_FROM_ZERO";
    RoundingMode[RoundingMode["MP_TOWARDS_ZERO"] = 3] = "MP_TOWARDS_ZERO";
    RoundingMode[RoundingMode["TOWARDS_ZERO"] = 4] = "TOWARDS_ZERO";
})(exports.RoundingMode || (exports.RoundingMode = {}));
var RoundingMode = exports.RoundingMode;
//# sourceMappingURL=esbase.js.map