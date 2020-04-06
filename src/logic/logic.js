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
                    chance: item1.value * item2.value
                }
            })
            newArr = newArr.concat(partArr)
        })
        return powArr(newArr, arr2, n+1)
    }

    return powArr(alphabet, alphabet, n)
}



/*function transformOnHaff(arr, m) {
    n = 1;
    function powArr(arr1, arr2, n) {
        if (n === m) {
            return arr1.sort(compareNumeric)
        }
        
        newArr = [] 
        arr1.forEach((item1)=>{
            partArr = arr2.map((item2) => {
                return {
                    name: `${item1.name} ${item2.name}`,
                    value: item1.value * item2.value
                }
            })
            newArr = newArr.concat(partArr)
        })
        return powArr(newArr, arr2, n+1)
    }

    return powArr(arr, arr, n)
}
console.log('1')
console.log(transformOnHaff([{name: 'a1', value: 0.3},{name: 'a2', value: 0.7}], 1))
console.log('2')
console.log(transformOnHaff([{name: 'a1', value: 0.3},{name: 'a2', value: 0.7}], 2))
console.log('3')
console.log(transformOnHaff([{name: 'a1', value: 0.3},{name: 'a2', value: 0.7}], 3))*/
export {isANumber, limitNumberFormat, transformTheData}