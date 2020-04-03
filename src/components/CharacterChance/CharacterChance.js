import React from 'react'
import parameterContext from '../../context/parameterContext/parameterContext'
import { useContext } from 'react'
import Input from '../UI/Input'

const CharacterChance = () => {
    const { parameterState: { characterChance }, chanceChange} = useContext(parameterContext)

    return (
        <div className="character-chance">
            {
                characterChance.map((item, index) => {
                    const  { name, chance } = characterChance[index]
                    return (
                        <div className='character-chance-item' key={index}>
                            <Input
                                label={name}
                                errorMessage={'sds'}
                                defaultValue={chance} 
                                onChange={(e)=>{
                                    chanceChange(e.target.value, index)
                                }}
                            />
                        </div> 
                    )
                })
            }
        </div>
    )
}
export default CharacterChance