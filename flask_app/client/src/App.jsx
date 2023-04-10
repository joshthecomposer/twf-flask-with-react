import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import NavBar from './component/NavBar'
import About from "./component/About"
import Home from './component/Home'
import Footer from './component/Footer'
import axios from 'axios'

const App = () => {
    const [tempLink, setTempLink] = useState("http://localhost:5000")//TODO: disable this before building
    const [audio, setAudio] = useState(0);
    useEffect(() => {
        axios.get(`${tempLink}/api/episodes/latest`)
            .then(res => {
                console.log(res.data.links[0].href);
                setAudio(res.data.links[0].href);
            } )
            .catch(err => console.log(err));
    },[])
    return (
        <>
            <div className='nav-test'>
                <NavBar />
            </div>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
