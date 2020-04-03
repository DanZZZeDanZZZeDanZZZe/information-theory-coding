import React, { useState } from 'react'
import parameterContext from './parameterContext'
import { isANumber } from '../../logic/logic'


const ParameterState = ({children}) => {
    const checkboxNames = ['Binary code', 'Shannon-Fano code', 'Huffman code']

    const initalState = () => {
        const state = {}
        state.checkboxes = checkboxNames.map((item, index) => {
            return {
                text: item,
                id: `checkbox-${index}`,
                activity: false
            }
        })
        const voidArr = new Array(5).fill(null)
        state.select = voidArr.map((item, index) => {
            return {
                value: index + 2,
                id: `option-${index}`,
            }
        }) 
        state.characterChance = createCharacterChanceArr(2)
        return state
    }


    const createCharacterChanceArr = (length) => {
        const arr = new Array(length).fill(null)
        const characterArr = arr.map((item, index) => {
            return {
                name: `a${index+1}`,
                chance: 0.5,
                valid: true,
                shouldValidate: true,
                touched: false
            }
        })
        return characterArr
    }

    const [parameterState, setParameterState] = useState(
        initalState()
    )

    const changeAlphabetSettings = (length) => {
        setParameterState({
            ...parameterState, 
            characterChance: createCharacterChanceArr(length)
        })
    }

    const checkboxChangeHandler = (index) => {
        const { checkboxes } = parameterState
        checkboxes[index].activity = !checkboxes[index].activity
        setParameterState({
            ...parameterState, 
            checkboxes: checkboxes 
        })
    }

    const chanceChange = (value, index) => {
        const { characterChance } = parameterState
        let { chance, touched, valid, ...props } = characterChance[index]
        touched = true
        chance = value
        console.log(isANumber(+value))
        if (isANumber(+value)) {
            valid = true
        } else {
            valid = false
        }
        characterChance[index] = { chance, touched, valid, ...props }
        setParameterState({
            ...parameterState, 
            characterChance: characterChance 
        })
    }

    return (
        <parameterContext.Provider value={{
            checkboxChangeHandler,
            changeAlphabetSettings,
            chanceChange,
            parameterState
        }}>
            {children}
        </parameterContext.Provider>
    )
}

export default ParameterState