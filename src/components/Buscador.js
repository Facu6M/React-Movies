import React, { useState } from 'react'
import styles from "../styles/Buscador.css"
import { createContext } from 'react';
import { useEffect } from 'react';

const Buscador = () => {

const [searchTerm, setSearchterm] = useState ("");

const [pelis, setPelis] = useState([]);

useEffect(() => {
  fetch(`https://www.omdbapi.com/?s=${searchTerm}&page=1&apikey=1ed491f`)
  .then(res => res.json())
  .then(peli => setPelis(peli.Search))


})

console.log(pelis)


  return (


<div class = "wrapper">

        <div class = "logo">
            <div class = "container">
                <p>Movie<span>Play</span></p>
            </div>
        </div>

        <div class = "search-container">
            <div class = "search-element">
                <h3>Search Movie:</h3>
                <form>
                <input type = "text" class = "form-control" placeholder="Search Movie Title ..." id = "movie-search-box" onChange={ (e) => {
            e.preventDefault()
            setSearchterm(e.target.parentNode[0].value)
          }   } ></input>
          </form>
                <div class = "search-list" id = "search-list">

                    {/* <div class = "search-list-item">
                        <div class = "search-item-thumbnail">
                            <img src = "medium-cover.jpg"/>
                        </div>
                        <div class = "search-item-info">
                            <h3>Guardians of the Galaxy Vol. 2</h3>
                            <p>2017</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>



{
  pelis == undefined ?
  <h6>Put a movie or serie available</h6>
  :
     pelis ?
   <div className='movie_container'>
{    pelis.map((pelicula) => (
  <>
       <div className='card'>
       <img src={pelicula.Poster}></img>
       <p className='titulo'>{pelicula.Title}</p>
       <p className='año'>{pelicula.Year}</p>
       <p className='tipo'>{pelicula.Type}</p>
</div>
       </>
       ))}

 </div>
 :
<h6>Movie not found</h6>
  }

</div>
  )
}


export default Buscador