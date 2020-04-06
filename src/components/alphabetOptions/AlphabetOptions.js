import React from 'react'
import './AlphabetOptions.css'
import { useEffect, useContext } from 'react'
import parameterContext from '../../context/parameterContext/parameterContext'
import Select from '../select'
import CharacterChance from '../CharacterChance'
import Input from '../UI/Input'
import CalculationsButton from '../CalculationsButton/CalculationsButton.js'

const AlphabetOptions = () => {
    const { checkboxChangeHandler, parameterState, changeAlphabetSettings, changeBlockLength} = useContext(parameterContext)
    const { select } = parameterState
    useEffect(() => {
        console.log(parameterState)
    }, [parameterState]);

    const { checkboxes } = parameterState

    return (
        <div className="alphabet-options">
            <h1>Define informational characteristics for:</h1>
            <div>
                <div className='checkbox-container'>
                    <p>Select code type</p>
                    {
                        checkboxes.map((item, index) => {
                            const {text, id} = item
                            return (
                                <Input
                                    type="checkbox" 
                                    onChange={
                                        () => {checkboxChangeHandler(index)}
                                    }
                                    label={text}
                                    key={id}
                                />
                            )
                        })
                    }
                </div>
                <Select
                    title={`Choose the length of the alphabet`} 
                    activity={changeAlphabetSettings}
                    select={select}
                    range={[2,4]}
                />
                <Select
                    title={`Choose the length of the encoded block`}
                    activity={changeBlockLength}
                    select={select}
                    range={[2,3]}
                />
                <CharacterChance/>
                <CalculationsButton/>
            </div>
        </div>
    )
}

export default AlphabetOptions