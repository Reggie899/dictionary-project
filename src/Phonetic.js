import React from "react";

export default function Phonetic(props) {
    console.log("PHONNNN" , props.phonetic)
    console.log("AUDIO" , props.phonetic.audio)

  return (
      <div>
{/* <a href={props.phonetic.audio} target="_blank">
    Listen
</a> */}
<br/>
{props.phonetic.text}
{/* <audio src="https://api.dictionaryapi.dev/media/pronunciations/en/bull-us.mp3" type="audio/mpeg" controls> */}
<audio src={props.phonetic.audio} type="audio/mpeg" controls>
</audio>
      </div>
  )
}
