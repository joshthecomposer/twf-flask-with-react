import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import NavBar from './component/NavBar'
import About from "./component/About"
import Home from './component/Home'
import axios from 'axios'

const App = () => {
    // const [message, setMessage] = useState(0);
    // useEffect(() => {
    //     axios.get("/api/episodes/latest")
    //         .then(res => {
    //             console.log(res.data.id);
    //             setMessage(res.data.id);
    //         } )
    //         .catch(err => console.log(err));
    // },[])
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    )
}

export default App
