import "./Home.css"

import { useState, useEffect } from 'react'

import MovieCard from '../components/MovieCard'

const URL = import.meta.env.VITE_API

const Home = () => {

    const [movies, setMovies] = useState([]);


    const getMovies = async (url) => {

        const res = await fetch(url)
        const data = await res.json()
        setMovies(data.results)
    }


    useEffect(() => {
        try {
            getMovies(URL)
        } catch(error) {
            console.log(error)
        }

    }, [])


    return (
        <section>
             <h1>Mais assistidos no momento </h1> 
             <div className="div-container"> 
             {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie}/>
            ))} 
             </div> 
            </section>
    )
}

export default Home