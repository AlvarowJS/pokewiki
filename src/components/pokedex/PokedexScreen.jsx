import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PokeCard from './PokeCard'
import PokeInfo from './PokeInfo'

const PokedexScreen = () => {

    const userName = useSelector(state => state.nameUser)
    const [pokeInfo, setPokeInfo] = useState()
    const [currentPage, setCurrentPage] = useState(1)
    const [filterName, setFilterName] = useState('')
    const [pokemons, setPokemons] = useState()

    
    


    useEffect(() => {
        const URL_POKEMONS = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20/'
        axios.get(URL_POKEMONS)
            .then(res => setPokemons(res.data.results))
            .catch(err => console.log(err))
    }, [])

    console.log(pokemons, 'imprimiendo')
    
    
    return (
        <div>
            <h1>Hola {userName}, Bienvenido a la pokedex</h1>
            <form>
                <input type="text" placeholder='Search a pokemon'
                   
                />                


            </form>
            <select name="" id="">
                <option value="">Normal</option>
                <option value="">Lucha</option>
            </select>
            <div className='pokemon__card'>
                {
                    pokemons?.map(pokemon => (
                        <PokeCard
                            key={pokemon.url}
                            url={pokemon.url}
                            
                        />
                    ))
                }
            </div>
            <div className='pokemon__info'>
                
            </div>
        </div>
    )
}

export default PokedexScreen