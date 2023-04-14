import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import NavBar from './component/NavBar'
import About from "./component/About"
import Home from './component/Home'
import Footer from './component/Footer'
import Episodes from './component/AudioComponents/Episodes'
import axios from 'axios'

const App = () => {
    return (
        <>
            <div className='nav-test'>
                <NavBar />
            </div>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/about" element={<About />} />
                <Route path="/episodes" element={<Episodes />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
