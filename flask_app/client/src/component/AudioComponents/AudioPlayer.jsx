import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AudioContainerSm from './AudioContainerSm'

const AudioPlayer = (props) => {
    const { audioObjectArray, setAudioObjectArray, currentAudio, setCurrentAudio } = props;

    return (
        <div className="w-1/3 flex flex-col bg-mines-900">
            <div className='flex'>
                <img className='w-[150px] rounded-lg' alt="" />
                <canvas></canvas>
            </div>
            {
                audioObjectArray.map((a) => (
                    <AudioContainerSm audio={a} currentAudio={currentAudio} setCurrentAudio={ setCurrentAudio } />
                ))  
            }
        </div>
    )
}

export default AudioPlayer