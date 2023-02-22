import './App.css'

import { Routes, Route } from 'react-router-dom'

// components
import NavBar from './components/NavBar';

// Pages
import Home from "./pages/Home";
import Bests from './pages/Bests';
import Search from './pages/Search';
import Movie from "./pages/Movie"


function App() {


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bests" element={<Bests />} />
        <Route path="/search/" element={<Search />} />
        <Route path="movie/:id" element={<Movie />} />
      </Routes>
    </div>
  )
}

export default App
