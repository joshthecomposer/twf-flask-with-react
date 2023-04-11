import React, { useState, useEffect } from 'react'
import { BsFillPlayFill } from 'react-icons/bs'
import axios from 'axios'

const AudioPlayer = (props) => {
    const { audioObjectArray, setAudioObjectArray } = props;
    const [latest, setLatest] = useState({
        img: "",
        audio:""
    });
    useEffect(() => {
        axios.get("http://localhost:5000/api/episodes/latest")
            .then(res => {
                console.log(res.data);
                console.log(res.data.links[0].href)
                setLatest({
                    img: res.data.image.href,
                    audio: res.data.links[0].href
                })
            })
            .catch(err=>console.log(err))
    },[])

    return (
        <div className="w-1/3 flex flex-col bg-mines-900">
            <div className='flex'>
                <img className='w-[150px] rounded-lg' src={latest.img} alt="" />
                <canvas></canvas>
            </div>
            <div className="bg-mines-800 text-mines-400 flex gap-2 items-center ">
                <BsFillPlayFill  size='35px' className="text-mines-400"/>
                <audio src={latest.audio}></audio>
                <p>Episode 3: Bagginses and Hagginses</p>
            </div>
            <div className="bg-mines-800 text-mines-400 flex gap-2 items-center ">
                <BsFillPlayFill size='35px' className="text-mines-400"/>
                <audio src={latest.audio}></audio>
                <p>Episode 3: Bagginses and Hagginses</p>
            </div>
            <div className="bg-mines-800 text-mines-400 flex gap-2 items-center ">
                <BsFillPlayFill size='35px' className="text-mines-400"/>
                <audio src={latest.audio}></audio>
                <p>Episode 3: Bagginses and Hagginses</p>
            </div>
            <div className="bg-mines-800 text-mines-400 flex gap-2 items-center ">
                <BsFillPlayFill size='35px' className="text-mines-400"/>
                <audio src={latest.audio}></audio>
                <p>Episode 3: Bagginses and Hagginses</p>
            </div>
        </div>
    )
}

export default AudioPlayer