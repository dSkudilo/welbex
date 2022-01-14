export function isNumber(val){
    return /^-?[\d.]+(?:e-?\d+)?$/.test(val)
}