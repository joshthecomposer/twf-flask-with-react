import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import NavBar from './component/NavBar'
import About from "./component/About"
import Home from './component/Home'
import Footer from './component/Footer'
import axios from 'axios'
import Episodes from './component/Episodes'

const App = () => {
    const [tempLink, setTempLink] = useState("http://localhost:5000")//TODO: disable this before building
    const [audio, setAudio] = useState(0);
    const [audioObjectArray, setAudioObjectArray] = useState([]);
    return (
        <>
            <div className='nav-test'>

            <NavBar />
            </div>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/about" element={<About />} />
                <Route path="/episodes" element={<Episodes audioObjectArray={audioObjectArray} setAudioObjectArray={setAudioObjectArray} />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
