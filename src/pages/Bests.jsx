import  { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'

const Bests = () => {
  const [movies, setMovies] = useState([])



  useEffect(() => {

    try{
      const getBests = async () => {

      const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=e551eba707f5e5f460ea6cd98d0a9b73&language=pt-BR&page=1")
      const res = await data.json()
      setMovies(res.results)
    }
    getBests()
  } catch (error) {
    console.log(error)
  }


  }, [])

  return (
    <section>
        <h1>Melhores avaliados</h1>
        <div className="div-container">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie}/>
        ))}
        </div>
    </section>
  )
}

export default Bests