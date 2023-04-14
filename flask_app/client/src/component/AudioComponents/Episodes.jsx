import React,{useEffect, useState, useRef} from 'react'
import AudioPlayer from './AudioPlayer'
import axios from 'axios';

const Episodes = () => {
    const [audioObjectArray, setAudioObjectArray] = useState([]);
    const [currentPlayState, setCurrentPlayState] = useState({
        idx: -1,
        isPlaying: false,
        isInit: false,
        summaryIdx : 0,
        isSummaryShowing: false,

    })

    const [dangerousHTML, setDangerousHTML] = useState({});

    const [img, setImg] = useState("./twf-temp.jpg");

    const masterAudio = useRef(new Audio());

    useEffect(() => {
        axios.get("/api/episodes")
            .then(res => {
                setAudioObjectArray(res.data);
                setDangerousHTML({ __html: res.data[0].summary });
            })
            .catch(err => console.log(err));
    }, []);
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className='text-[7rem] font-normal mt-[4rem] uppercase text-center text-[2D2D2D]'>
                Listen to the Podcast
            </h1>
            <AudioPlayer img={img} setImg={setImg} audioObjectArray={audioObjectArray} masterAudio={masterAudio} currentPlayState={currentPlayState} setCurrentPlayState={setCurrentPlayState} dangerousHTML={dangerousHTML} setDangerousHTML={setDangerousHTML} />
        </div>
    )
}

export default Episodes