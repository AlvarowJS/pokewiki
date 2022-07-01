import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PokeCard = ({ url, infoPokemon }) => {

    const [pokemon, setPokemon] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(url)
            .then(res => setPokemon(res.data))
            .catch(err => console.log(err))
    }, [])
    console.log(pokemon, 'pokemon')

    const getPokemonId = () => navigate(`/pokedex/${pokemon.id}`)
    return (
        <article className={`pokemon__cardList ${pokemon?.types[0].type.name}`} onClick={getPokemonId}>

            <img className={pokemon?.types[0].type.name} src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
            {/* <img src={pokemon?.sprites.front_default} alt="" /> */}
            <div className='pokemon__cardList--pokemon'>
                <h2>{pokemon?.name}</h2>

                <p>
                    {
                        pokemon?.types.map(type => type.type.name).join(' / ')
                    }
                </p>
                <p>Type</p>
                <div className='pokemon__cardList--topInfo'>
                    <div>
                        <p>HP </p>
                        <p>{pokemon?.stats[0].base_stat}</p>
                    </div>
                    <div>
                        <p>ATTACK </p>
                        <p>{pokemon?.stats[1].base_stat}</p>
                    </div>
                </div>
                <div className='pokemon__cardList--botInfo'>
                    <div>
                        <p>DEFENSE</p>
                        <p>{pokemon?.stats[2].base_stat}</p>
                    </div>
                    <div>
                        <p>WEIGHT</p>
                        <p>{pokemon?.weight}</p>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default PokeCard 