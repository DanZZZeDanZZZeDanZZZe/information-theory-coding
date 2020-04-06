import React, { useState } from 'react'
import parameterContext from '../../context/parameterContext/parameterContext'
import { useContext } from 'react'
import Input from '../UI/Input'

const CharacterChance = () => {
    const { parameterState: { characterChance }, chanceChange} = useContext(parameterContext)
    const onChangeHandler = (value, index) => {
        chanceChange(value, index)
    }

    return (
        <div className="character-chance">
            {
                characterChance.map((item, index) => {
                    const  { name, chance, valid, touched, shouldValidate} = characterChance[index]
                    return (
                        <div className='character-chance-item' key={index}>
                            <Input
                                label={name}
                                errorMessage={'Field value must be a number'}
                                defaultValue={chance} 
                                shouldValidate={shouldValidate}
                                valid={valid}
                                touched={touched}
                                type="number"
                                onChange={ event => {
                                    onChangeHandler(event.target.value, index)
                                }}
                            />
                        </div> 
                    )
                })
            }
        </div>
    )
}
export default CharacterChance