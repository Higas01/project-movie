import "./NavBar.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { TbSearch } from "react-icons/tb"
import { useState, useRef } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

const NavBar = () => {
    const navRef = useRef();

    const [menu, setMenu] = useState(false)

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")

        if (menu) {
            setMenu(false)
            return
        }

        if (!menu) {
            window.scrollTo(
                {
                    top: 0,
                    behavior: 'smooth'
                }
            )
        }
        setMenu(true)
    }

    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        getSearch()


    }

    const getSearch = () => {
        navigate("/search/?" + search)

    }
     return (
        <div >
            {menu ?
                (<button className="nav-btn" onClick={showNavbar}><FaTimes /></button>)
                : (<button className="nav-btn" onClick={showNavbar}><FaBars /></button>)}
            <nav ref={navRef}>
                <h2 className="h2-navbar"><NavLink to="/">HM <br /> Filmes</NavLink></h2>
                <form onSubmit={handleSubmit} className="form-search">
                    <TbSearch />
                    <input type="text" placeholder="Digite o nome do filme que esta procurando" value={search} onChange={e => setSearch(e.target.value)} />
                </form>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="bests">Melhores Avaliações</NavLink>
                    </li>
                </ul>
            </nav>

        </div>
    )


}

export default NavBar