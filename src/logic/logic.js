function isANumber(value) {
    if(value instanceof Number)
        value = value.valueOf();
    return isFinite(value)
}

function limitNumberFormat(value) {
    if (value >= 1) return false
    if (value.toString().length > 6) return false
    return true 
} 
export {isANumber, limitNumberFormat}