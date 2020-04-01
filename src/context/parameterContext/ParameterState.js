import React, { useState } from 'react'
import parameterContext from './parameterContext'


const ParameterState = ({children}) => {
    const checkboxNames = ['Binary code', 'Shannon-Fano code', 'Huffman code']

    const [settingsState, setSettingsState] = useState({
        checkboxes: checkboxNames.map((item, index) => {
            return {
                text: item,
                id: `checkbox-${index}`,
                activity: false
            }
        })
    });

    const checkboxClickHandler = (index) => {
        const { checkboxes } = settingsState
        const newCheckboxes = checkboxes.map((itm, ind) => {
            if (ind === index) return {...itm, activity: !itm.activity}
            return {...itm, activity: itm.activity}
        })
        setSettingsState({
            ...settingsState, 
            checkboxes: newCheckboxes 
        })
    }

    return (
        <parameterContext.Provider value={{
            checkboxClickHandler,
            settingsState
        }}>
            {children}
        </parameterContext.Provider>
    )
}

export default ParameterState