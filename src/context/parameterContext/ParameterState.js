import React, { useState } from 'react'
import parameterContext from './parameterContext'


const ParameterState = ({children}) => {
    const checkboxNames = ['Binary code', 'Shannon-Fano code', 'Huffman code']

    const [parameterState, setParameterState] = useState({
        checkboxes: checkboxNames.map((item, index) => {
            return {
                text: item,
                id: `checkbox-${index}`,
                activity: false
            }
        })
    });

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
            parameterState
        }}>
            {children}
        </parameterContext.Provider>
    )
}

export default ParameterState