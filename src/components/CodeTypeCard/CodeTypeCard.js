import React from 'react'
import { useContext } from 'react'
import parameterContext from '../../context/parameterContext/parameterContext'
import Checkbox from '../UI/Checkboxe/Checkbox'

const CodeTypeCard = () => {
    const { checkboxChangeHandler, parameterState} = useContext(parameterContext)
    const { checkboxes } = parameterState

    return (
        <div action="#" className='card' style={{padding: '10px'}}>
            <p className='card-title'>Select code type</p>
            <form className='card-content'>
            {
                checkboxes.map((item, index) => {
                    const {text, id} = item
                    return (
                        <Checkbox
                            type="checkbox" 
                            onChange={
                                () => {checkboxChangeHandler(index)}
                            }
                            label={text}
                            key={id}
                        />
                    )
                })
            }
            </form>
        </div>
    )
}

export default CodeTypeCard