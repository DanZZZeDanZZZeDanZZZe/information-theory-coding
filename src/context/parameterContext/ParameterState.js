import React, { useState } from 'react'
import parameterContext from './parameterContext'


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
                chance: 0.5
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

    const checkboxClickHandler = (index) => {
        const { checkboxes } = parameterState
        const newCheckboxes = checkboxes.map((itm, ind) => {
            if (ind === index) return {...itm, activity: !itm.activity}
            return {...itm, activity: itm.activity}
        })
        setParameterState({
            ...parameterState, 
            checkboxes: newCheckboxes 
        })
    }

    const chanceChange = (value, index) => {
        const { characterChance } = parameterState
        characterChance[index].chance = value
        setParameterState({
            ...parameterState, 
            characterChance: characterChance 
        })
    }

    return (
        <parameterContext.Provider value={{
            checkboxClickHandler,
            changeAlphabetSettings,
            chanceChange,
            parameterState
        }}>
            {children}
        </parameterContext.Provider>
    )
}

export default ParameterState