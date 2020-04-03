import React from 'react'
import parameterContext from '../../context/parameterContext/parameterContext'
import { useContext } from 'react'

const CharacterChance = () => {
    const { parameterState: { characterChance }, chanceChange} = useContext(parameterContext)

    return (
        <div className="character-chance">
            {
                characterChance.map((item, index) => {
                    const  { name, chance } = characterChance[index]
                    return (
                        <div className='character-chance-item' key={index}>
                            <label>{`${name} `}</label>
                            <input 
                                onChange={(e)=>{
                                    chanceChange(e.target.value, index)
                                }}
                                type='text' 
                                defaultValue={chance} 
                            />
                        </div> 
                    )
                })
            }
        </div>
    )
}

export default CharacterChance