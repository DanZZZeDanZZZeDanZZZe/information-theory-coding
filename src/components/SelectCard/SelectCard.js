import React, { useContext } from 'react'
import parameterContext from '../../context/parameterContext/parameterContext'
import Select from '../select'

const SelectCard = () => {
    const { parameterState, changeAlphabetSettings, changeBlockLength} = useContext(parameterContext)
    const { select } = parameterState

    return (
        <div className="card">
            <div className="card-content">
                <Select
                    title={`Choose the length of the alphabet`} 
                    activity={changeAlphabetSettings}
                    select={select}
                    range={[2,5]}
                />
                <Select
                    title={`Choose the length of the encoded block`}
                    activity={changeBlockLength}
                    select={select}
                    range={[2,3]}
                />
            </div>
        </div>
    )
}

export default SelectCard