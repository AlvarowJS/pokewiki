import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PokeInfo = () => {
  const [onePokemon, setOnePokemon] = useState({})
  const { id } = useParams()
  
  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(url)
    .then(res => {
      console.log(res.data,'hola')
      setOnePokemon(res.data)
    })
    .catch(err => console.log(err))
  },[])
  return (
    <div>
      <img src={onePokemon.sprites?.other['official-artwork'].front_default} alt="Pokemon Image" />
      <p> # {onePokemon.id}</p>
      <p className='pokemonInfo__name'>{onePokemon.name}</p>
      <div className='pokemonInfor__dimensions'>
        <p>Weight </p>
        <p>{onePokemon.weight}</p>
        <p>Height</p>
        <p>{onePokemon.height}</p>
      </div>
      
    </div>
  )
}

export default PokeInfo