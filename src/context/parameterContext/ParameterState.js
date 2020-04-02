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
                activity: index === 0 ? true : false
            }
        }) 
         
        return state
    }

    const [parameterState, setParameterState] = useState(
        initalState()
    )

    const optionClickHandler = (index) => {
        const { select } = parameterState
        const newSelect = select.map((itm, ind) => {
            if (ind === index) return {...itm, activity: !itm.activity}
            return {...itm, activity: itm.activity}
        })
        setParameterState({
            ...parameterState, 
            select: newSelect
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
            optionClickHandler,
            parameterState
        }}>
            {children}
        </parameterContext.Provider>
    )
}

export default ParameterState