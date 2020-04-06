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

function compareNumeric(a, b) {
    if (a.value > b.value) return -1;
    if (a.value === b.value) return 0;
    if (a.value < b.value) return 1;
}
function transformTheData(data, blockLength) {
    return getСharacterСombinations(
        transformData(data), blockLength
    ) 
}
function transformData(data) {
    return data.map((item, index) => {
        const {name, chance} = item
        return {
            name,
            chance
        }
    })
}
function getСharacterСombinations(alphabet, blockLength) {
    let n = 1;
    function powArr(arr1, arr2, n) {
        if (n === blockLength) {
            return arr1.sort(compareNumeric)
        }
        
        let newArr = [] 
        arr1.forEach((item1)=>{
            const partArr = arr2.map((item2) => {
                return {
                    name: `${item1.name} ${item2.name}`,
                    chance: item1.chance * item2.chance
                }
            })
            newArr = newArr.concat(partArr)
        })
        return powArr(newArr, arr2, n+1)
    }

    return powArr(alphabet, alphabet, n)
}

export {isANumber, limitNumberFormat, transformTheData}