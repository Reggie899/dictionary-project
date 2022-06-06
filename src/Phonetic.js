import React from "react";

export default function Phonetic(props) {
  console.log("PHONNNN", props.phonetic);
  console.log("AUDIO", props.phonetic.audio.length);

  if (props.phonetic.text) {
    return (
      <div style={{ display: "flex", justifyContent: "center", marginTop: "0%", color: "white" }}>
        {props.phonetic.audio.length > 0 ? (
          <div>
            <br />
            <div style={{ marginTop: "10%" }}>{props.phonetic.text}</div>
            <br />
            <audio
              src={props.phonetic.audio}
              type="audio/mpeg"
              controls
            ></audio>
          </div>
        ) : null}
      </div>
    );
  } else {
    return null;
  }
}
