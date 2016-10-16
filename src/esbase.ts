let _isFinite: (value: any) => boolean = isFinite;
export function assert(flag: boolean): void {
    if (!flag) {
        throw new Error();
    }
}
export function isFiniteDouble(value: any): boolean {
    return typeof value === "number" && _isFinite(value);
}

let Object_prototype_toString = Object.prototype.toString;
export function isFunction(value: any): boolean {
    return Object_prototype_toString.call(value) === "[object Function]";
}
export let isArray: (value: any) => boolean = Array.isArray;
if (!isFunction(isArray)) {
    isArray = (value: any) => Object_prototype_toString.call(value) === "[object Array]";
}
let double_floor = Math.floor;
let Number_isInteger: (value: any) => boolean = (<any>Number).isInteger;
if (!isFunction(Number_isInteger)) {
    Number_isInteger = (x: any) => {
        return isFiniteDouble(x) && double_floor(x) === x;
    };
}
export let isIntegralDouble = Number_isInteger;

export let double_log10: (x: number) => number = (<any>Math).log10;
if (!isFunction(double_log10)) {
    let log = Math.log;
    let LOG10E = Math.LOG10E;
    double_log10 = (x: number) => log(x) * LOG10E;
}

let double_ceil = Math.ceil;
export function double_roundToZero(x: number): number {
    return (x < 0 ? double_ceil : double_floor)(x);
}
export function double_roundAwayFromZero(x: number): number {
    return (x < 0 ? double_floor : double_ceil)(x);
}

export interface Iterable<T> {
    length: number;
    [index: number]: T;
}
let Array_prototype_slice = Array.prototype.slice;
export function toArray<T>(value: Iterable<T>): T[] {
    if (isArray(value)) return <T[]>value;
    return <T[]>Array_prototype_slice.call(value, 0);
}

export enum RoundingMode {
    AWAY_FROM_ZERO,
    BANKERS,
    MP_AWAY_FROM_ZERO,
    MP_TOWARDS_ZERO,
    TOWARDS_ZERO,
}