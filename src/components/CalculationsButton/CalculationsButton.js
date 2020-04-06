import React, { useContext } from 'react'
import parameterContext from '../../context/parameterContext/parameterContext'

const CalculationsButton = () => {
    const { calculationsButtonClickHandler } = useContext(parameterContext)

    return (
        <button onClick={calculationsButtonClickHandler}>
            Сalculate
        </button>
    )
}

export default CalculationsButton