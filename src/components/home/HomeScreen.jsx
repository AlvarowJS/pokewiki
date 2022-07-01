import React from 'react'
import InputHome from './InputHome'
import avatar from '../../assets/img/trainer.png'
import logo from '../../assets/img/pokedexLogo.png'

const HomeScreen = () => {
    return (
    <div className='login'>
        
        <img className='login__logo' src={logo} alt="" />
        <h2>Hi Trainer!</h2>
        <p>to start entering your name</p>
        <img className='login__avatar' src={avatar} alt="" />        
        
    <InputHome/>
    </div>
  )
}

export default HomeScreen