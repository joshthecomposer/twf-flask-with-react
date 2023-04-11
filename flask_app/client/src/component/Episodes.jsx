import React from 'react'
import AudioPlayer from './AudioPlayer'

const Episodes = (props) => {
    const { audioObjectArray, setAudioObjectArray } = props;
  return (
        <>
          <AudioPlayer audioObjectArray={audioObjectArray} setAudioObjectArray={setAudioObjectArray} />
        </>
    )
}

export default Episodes