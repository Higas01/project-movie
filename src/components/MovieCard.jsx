import "./MovieCard.css"

const urlImage = import.meta.env.VITE_IMG

import { IoIosStar } from "react-icons/io"
import { useNavigate } from "react-router-dom"
const MovieCard = ({ movie }) => {

    const navigate = useNavigate()

    return (
        <div className='movie-card'>
            <img src={urlImage + movie.poster_path} alt={`imagem do filme ${movie.title}`} />
            <h2>{movie.title}</h2>
            <div className='details'>
                <div>
                    <p><IoIosStar className="icon" /> {movie.vote_average}</p>
                </div>
                <input type="button" value="Clique para saber mais" onClick={() => navigate("/movie/" + movie.id)}/>
            </div>
        </div>
    )
}

export default MovieCard