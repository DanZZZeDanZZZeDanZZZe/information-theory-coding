import React, { useContext } from 'react'
import parameterContext from '../../context/parameterContext/parameterContext'

const Select = ({title, range, activity}) => {
    const options = new Array(range[1]-range[0]+2)
        .fill(null)
        .map((item, index) => {
            const props = {
                key: index,
                id: `option-${index}`,
            }
            return (
                <option {...props}>
                    {index + range[0]}
                </option>
            ) 
        })

    const onChangeHandler = (event) => {
        activity(+event.target.value)
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