import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Form from './Form'
import PokeCard from './PokeCard'
import logo from '../../assets/img/pokedexLogo.png'

const PokedexScreen = () => {

    const userName = useSelector(state => state.nameUser)
    const [pokeInfo, setPokeInfo] = useState()
    const [pokemons, setPokemons] = useState()
    const [pokeSearch, setPokeSearch] = useState()
    const [filterType, setFilterType] = useState()
    const [typeList, setTypeList] = useState()
    const [filterPokemon, setFilterPokemon] = useState()

    useEffect(() => {
        if (filterType == 'All Pokemons') {
            // todos los pokemons
            const URL_POKEMONS = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20/'
            axios.get(URL_POKEMONS)
                .then(res => setPokemons(res.data.results))
                .catch(err => console.log(err))            
        } else {
            // pokemons por tipo
            const URL = `https://pokeapi.co/api/v2/type/${filterType}/`
            axios.get(URL)
              .then(res => {
                const array = res.data.pokemon.map(e => e.pokemon)
                setPokemons(array)        
              })
              .catch(err => console.log(err))
        }
    }, [filterType])

    // Filter for type
    useEffect(() => {
        const URL = 'https://pokeapi.co/api/v2/type/'
        axios.get(URL)
            .then(res => setTypeList(res.data.results))
            .catch(err => console.log(err))
    }, [])

    // Filter search
    useEffect(() => {
        if (pokemons) {
            setFilterPokemon(pokemons.filter(e => e.name.includes(pokeSearch.toLowerCase())))
        }
    }, [pokeSearch])


    return (
        <div>
            <img className='menu__logo' src={logo} alt="" />
            <h1>Hi {userName}, Welcome to the pokedex</h1>

            <Form
                setPokeSearch={setPokeSearch}
                typeList={typeList}
                setFilterType={setFilterType}
            />

            <div className='pokemon__card'>
                {
                    filterPokemon ?
                        filterPokemon?.map(pokemon => (
                            <PokeCard
                                key={pokemon.url}
                                url={pokemon.url}
                            />
                        ))
                        :
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