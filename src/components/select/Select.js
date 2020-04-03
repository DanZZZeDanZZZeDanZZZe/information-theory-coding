import React, { useContext } from 'react'
import parameterContext from '../../context/parameterContext/parameterContext'

const Select = ({title}) => {
    const { changeAlphabetSettings, parameterState: { select }} = useContext(parameterContext)
    const options = select.map((item, index) => {
        const {value, id} = item
        const props = {
            key: index,
            id: id
        }
        return (
            <option {...props}>
                {value}
            </option>
        ) 
    })

    const onChangeHandler = (event) => {
        changeAlphabetSettings(+event.target.value)
    }

    return (
        <div className="select">
            <p>{title}</p>
            <select 
                onChange={onChangeHandler}
            >
                {options}
            </select>
        </div>
    )
}

export default Select