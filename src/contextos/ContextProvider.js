import React, { createContext, useEffect, useState } from 'react'
import { Context } from 'react'
import Buscador from '../components/Buscador'

const peliculas = createContext("peliculas")

const ContextProvider = ({searchTerm}) => {

const [pelis, setPelis] = useState([]);

    useEffect(() => {
      fetch(`https://www.omdbapi.com/?s=${searchTerm}&page=1&apikey=1ed491f`)
      .then(res => res.json())
      .then(peli => setPelis(peli))
  })

  return (
    <div >ContextProvider</div>
  )
}

export default ContextProvider