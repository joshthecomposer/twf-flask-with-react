import React,{useEffect} from 'react'
import AudioPlayer from './AudioComponents/AudioPlayer'
import axios from 'axios';

const Episodes = (props) => {
    const { audioObjectArray, setAudioObjectArray } = props;
    
    useEffect(() => {
        axios.get("http://localhost:5000/api/episodes")
            .then(res => setAudioObjectArray(res.data))
            .catch(err => console.log(err));
    }, []);
    return (
        <div className='flex justify-center'>
            <AudioPlayer audioObjectArray={audioObjectArray} setAudioObjectArray={setAudioObjectArray}/>
        </div>
    )
}

export default Episodes