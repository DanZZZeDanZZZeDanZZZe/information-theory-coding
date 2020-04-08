import React, { useContext, useEffect } from 'react'
import parameterContext from '../../context/parameterContext/parameterContext'
import M from 'materialize-css/dist/js/materialize.min.js'

const Select = ({title, range, activity}) => {
    useEffect(() => {
        M.AutoInit();
    }, []);
    const options = new Array(range[1]-range[0]+2)
        .fill(null)
        .map((item, index) => {
            const props = {
                key: index,
                id: `option-${index}`,
                value: index + range[0]
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
        <div className="input-field">
            <select 
                onChange={onChangeHandler}
            >
                {options}
            </select>
            <label>{title}</label>
        </div>
    )
}

export default Select