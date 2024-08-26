import React from 'react'
import MovieCard from '../movieCard/MovieCard'


const MoviesListe = ({movies}) => {
  return (
    <div>
      
        {movies.map((movie, key) =>  <MovieCard movie={movie}  key = {movie.id} /> )}





    </div>
    

  )
}

export default MoviesListe