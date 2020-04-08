import React from 'react'
import './AlphabetOptions.css'
import { useEffect, useContext } from 'react'
import parameterContext from '../../context/parameterContext/parameterContext'
import Select from '../select'
import CharacterChance from '../CharacterChance'
import CalculationsButton from '../CalculationsButton/CalculationsButton.js'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import CodeTypeCard from '../CodeTypeCard/CodeTypeCard'
import SelectCard from '../SelectCard/SelectCard'

const AlphabetOptions = () => {
    const { parameterState } = useContext(parameterContext)
    useEffect(() => {
        console.log(parameterState)
    }, [parameterState]);

    return (
        <div className="row">
            <div className="col s6">
                <CodeTypeCard />
                <SelectCard />
                <CalculationsButton/>
            </div>
            <div className="col s6">
                <CharacterChance/>
            </div>
        </div>
    )
}

export default AlphabetOptions