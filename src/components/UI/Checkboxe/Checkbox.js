import React from 'react'

const Checkbox = props => {
    const htmlFor = `"checkbox"-${Math.random()}`

    return (
        <p>
            <label htmlFor={htmlFor}>
                <input 
                    type="checkbox"
                    id={htmlFor}
                    value={props.value}
                    onChange={props.onChange}
                    defaultValue={props.defaultValue}
                />
                <span>{props.label}</span>
            </label>
        </p>            
    )
}

export default Checkbox