import React, { useState } from 'react'
import parameterContext from './parameterContext'
import { limitNumberFormat, transformTheData, getUniformBinaryCodes } from '../../logic/logic'


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
        state.characterChance = createCharacterChanceArr(2)
        state.blockLength = 2
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

    const changeBlockLength = (length) => {
        setParameterState({
            ...parameterState, 
            blockLength: length
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
        if (limitNumberFormat(value)) {
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
    const calculationsButtonClickHandler = () => {
        const { characterChance, blockLength } = parameterState
        let combinations = transformTheData(characterChance, blockLength)
        combinations = getUniformBinaryCodes(combinations)
        console.log(combinations)
    }
    return (
        <parameterContext.Provider value={{
            calculationsButtonClickHandler,
            checkboxChangeHandler,
            changeAlphabetSettings,
            changeBlockLength,
            chanceChange,
            parameterState
        }}>
            {children}
        </parameterContext.Provider>
    )
}

export default ParameterState