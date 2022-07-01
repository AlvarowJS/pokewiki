import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './components/home/HomeScreen'
import PokedexScreen from './components/pokedex/PokedexScreen'
import PokeInfo from './components/pokedex/PokeInfo'

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeScreen />} />

        <Route path='/pokedex' element={<PokedexScreen />} />
        <Route path='pokedex/:id' element={<PokeInfo />} />





      </Routes>
    </div>
  )
}

export default App
