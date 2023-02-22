import "./Movie.css"
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const urlImage = import.meta.env.VITE_IMG
import { IoIosStar } from "react-icons/io"


const Movie = () => {

    const [movie, setMovie] = useState([]);

    const { id } = useParams()

    useEffect(() => {

        const getMovie = async () => {
            const api = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e551eba707f5e5f460ea6cd98d0a9b73&language=pt-BR`)
            const res = await api.json()
            setMovie(res)
        }
        getMovie()

    }, [])

    return (
        <div className='movie-container'>
            <img src={urlImage + movie.poster_path} alt={"Imagem do filme" + movie.title} />
            <h2 className="h2-movie">Título: {movie.title}</h2>
            <div className="paragraphs-container">
                <p className="movie-paragraph"><span className="movie-span">Sinopse: </span> {movie.overview}</p>
            </div>
            <h2 className="h2-movie">Avaliação do filme:</h2>
            <p className="movie-review"><IoIosStar className="icon" /> {movie.vote_average}</p>
        </div>
    )
}

export default Movie