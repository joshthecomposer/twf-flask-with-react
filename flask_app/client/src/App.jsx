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
    const [audioObjectArray, setAudioObjectArray] = useState([]);
    const [currentAudio, setCurrentAudio] = useState({
        isPlaying:false
    });
    const masterAudioPlayer = () => {

    }
    return (
        <>
            <div className='nav-test'>
                <NavBar />
            </div>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/about" element={<About />} />
                <Route path="/episodes" element={<Episodes audioObjectArray={audioObjectArray} setAudioObjectArray={setAudioObjectArray} currentAudio={ currentAudio } setCurrentAudio={setCurrentAudio} />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
