import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import About from "./component/About"
import axios from 'axios'

const App = () => {
    const [message, setMessage] = useState(0);
    useEffect(() => {
        axios.get("/api/episodes/latest")
            .then(res => {
                console.log(res.data.id);
                setMessage(res.data.id);
            } )
            .catch(err => console.log(err));
    },[])
    return (
        <div className="flex gap-5">
            <Link className="text-blue-500 underline" to="/">Home</Link>
            <Link className="text-blue-500 underline" to="/about">About</Link>
            <Routes>
                <Route path="/about" element={<About message={message} />} />
            </Routes>
        </div>
    )
}

export default App
