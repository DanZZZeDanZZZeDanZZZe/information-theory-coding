import React, { useContext } from 'react'
import parameterContext from '../../context/parameterContext/parameterContext'

const Select = ({title}) => {
    const { parameterState: { select }} = useContext(parameterContext)
    
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

    return (
        <div className="select">
            <p>{title}</p>
            <select 
                onClick={
                    () => {
                        console.log('hy')
                    }
                }
            >
                {options}
            </select>
        </div>
    )
}

export default Select