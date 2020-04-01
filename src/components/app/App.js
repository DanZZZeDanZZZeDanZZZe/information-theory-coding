import React from 'react'
import './app.css'
import { useEffect, useContext } from 'react'
import parameterContext from '../../context/parameterContext/parameterContext'

const App = () => {
    const { checkboxClickHandler, settingsState} = useContext(parameterContext)

    useEffect(() => {
        console.log(settingsState)
    }, [settingsState]);

    const { checkboxes } = settingsState

    return (
        <div className="app">
            <h1>Define informational characteristics for:</h1>
            <div>
                <p>Select code type</p>
                {
                    checkboxes.map((item, index) => {
                        const {text, id} = item
                        return (
                            <p key={id}> 
                                <input 
                                    type="checkbox" 
                                    id={id}
                                    onClick={
                                        () => {checkboxClickHandler(index)}
                                    }
                                />
                                    {text}
                                </p>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default App