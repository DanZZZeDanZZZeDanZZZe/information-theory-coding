import React from 'react'
import './AlphabetOptions.css'
import { useEffect, useContext } from 'react'
import parameterContext from '../../context/parameterContext/parameterContext'
import Select from '../select'
import CharacterChance from '../CharacterChance'
import Input from '../UI/Input'

const AlphabetOptions = () => {
    const { checkboxChangeHandler, parameterState} = useContext(parameterContext)

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
                />
                <CharacterChance/>
            </div>
        </div>
    )
}

export default AlphabetOptions