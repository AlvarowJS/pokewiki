import React from 'react'
import InputHome from './InputHome'
import avatar from '../../assets/img/trainer.png'

const HomeScreen = () => {
    return (
    <div className='login'>
        <h1>Pokedex</h1>
        <img src={avatar} alt="" />
        <h2>Hola entrenador</h2>
        
    <InputHome/>
    </div>
  )
}

export default HomeScreen