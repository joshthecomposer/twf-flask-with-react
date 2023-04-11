import React, {useState, useEffect} from 'react'
import { CgNotes } from 'react-icons/Cg';

const AudioContainerSm = (props) => {
    const { audio, currentAudio, setCurrentAudio } = props;
    const [currentTitle, setCurrentTitle] = useState("");
    const playToggle = (audioObj) => {
        let audio = new Audio() //TODO: lift this into app.jsx
        if (audioObj.isPlaying)
        {
            audio.stop()
        }
    }
    const generateTitle = () => {
        if (audio.title.length > 50) {
            setCurrentTitle(audio.title.substring(0, 51)+" ...")
        } else {
            setCurrentTitle(audio.title)
        }
    }
    useEffect(() => {
        generateTitle();
    },[currentTitle])


    return (
        <>
          <div className="bg-mines-800 transition-all duration-300 hover:scale-[102%] text-mines-400 flex gap-2 items-center justify-between px-8 py-4 hover:cursor-pointer hover:bg-mines-400 hover:text-mines-800 overflow-hidden">
                <p> {currentTitle}</p>
                <CgNotes />
            </div>
        </>
    )
}

export default AudioContainerSm