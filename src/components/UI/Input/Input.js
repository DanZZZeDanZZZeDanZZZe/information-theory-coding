import React from 'react'
import classes from './Input.module.css'

function isInvalid({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched
}

const Input = props => {
    const inputType = props.type || 'text'
    const cls = [classes.Input]
    let scaleMas = 'scale-out'
    const htmlFor = `${inputType}-${Math.random()}`

    if (isInvalid(props)) {
        cls.push(classes.invalid)
        scaleMas = '' 
    }

    return (
        <div className={cls.join(' ')}>
            <label htmlFor='htmlFor'>{props.label}</label>
            <input 
                type={inputType}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
                defaultValue={props.defaultValue}
            />
            <span className={`mas scale-transition ${scaleMas}`}>
                {props.errorMessage || 'Enter the correct value'}
            </span>
        </div>
    )
}

export default Input