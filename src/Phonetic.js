import React from "react";

export default function Phonetic(props) {
    console.log("PHONNNN" , props.phonetic)
    console.log("AUDIO" , props.phonetic.audio)

  return (
      <div style={{display: "flex", justifyContent: "center", margin: "6%"}}>
<br/>
<div style={{margin: "2%"}}>
{props.phonetic.text}
</div>
<br/>
<audio src={props.phonetic.audio} type="audio/mpeg" controls>
</audio>
      </div>
  )
}
