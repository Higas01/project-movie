import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import MovieCard from '../components/MovieCard'

const Search = () => {
    const [movieReq] = useSearchParams();
    const [movies, setMovies] = useState([]);


    const [error, setError] = useState(false);

    useEffect(() => {
        try {
            setError(false)
            const getSearch = async () => {
                const api = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=e551eba707f5e5f460ea6cd98d0a9b73&language=pt-BR&query=${movieReq}&page=1&include_adult=false`)
                const res = await api.json()

                setMovies(res.results)

                if (res.results.length === 0) {
                    setError(true)
                    return
                }
            }

            getSearch()

        } catch (error) {
            console.log(error)
        }


    }, [movieReq])

    console.log(movies)

    return (
        <section>
            <h1>Resultados obtidos para: {movieReq}</h1>
            <div className="div-container">
                {error && (
                    <h1>Desculpe! Não conseguimos encontrar nenhum filme com essa palavra chave, tente novamente com outra palavra.</h1>)}
                {
                    movies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                }

            </div>
        </section>
    )
}

export default Search