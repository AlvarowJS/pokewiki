import React from 'react'

const Form = ({ setPokeSearch, typeList, setFilterType }) => {

    const changeInputText = (e) => {
        setPokeSearch(e.target.value)
    }

    const changeSelect = e => {
        setFilterType(e.target.value)
    }
    return (
        <form className='pokemon__filters'>
            <input 
                type="text" 
                placeholder='Search your favorite pokemon'
                onChange={changeInputText}
                />

            <select onChange={changeSelect}>
                <option value="All Pokemons">All Pokemons</option>
                {
                    typeList?.map(type => (
                        <option key={type.name} value={type.name}>{type.name}</option>
                    ))
                }
            </select>                
        </form>
    )
}

export default Form 