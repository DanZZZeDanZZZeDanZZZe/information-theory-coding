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
        state.alphabetLength = 2
        return state
    }


    const [parameterState, setParameterState] = useState(
        initalState()
    )

    const changeAlphabetLength = (length) => {
        setParameterState({
            ...parameterState, 
            alphabetLength: length
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

    return (
        <parameterContext.Provider value={{
            checkboxClickHandler,
            changeAlphabetLength,
            parameterState
        }}>
            {children}
        </parameterContext.Provider>
    )
}

export default ParameterState