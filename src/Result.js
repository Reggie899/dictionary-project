import React, { useState } from "react";

import Meaning from "./Meaning";
import Phonetic from "./Phonetic";


export default function Result(props) {
  const [noResult, setNoResult] = useState(false);
  console.log("Result", props.result);
  if (props.result) {
    // setNoResult(false);
    return <div className="Results">
<section >
<h2 style={{display: "flex", justifyContent: "center"}}> {props.result.word} </h2>

</section>
{/* <br/> */}
{props.result.meanings.map(function(meaning, index){
  return <section className="borderMagenta" key={index}>
    <Meaning meaning={meaning} />
    </section>  // meaning.definitions[0].definition;
})}
<section>
{props.result.phonetics.map(function(phonetic, index) {
  return (
    <div key={index}>
      <Phonetic phonetic={phonetic}/>
      </div>
  )
})}
</section>
    </div>;
  } else {
//     setNoResult(true);

      return (
        <div>
{noResult ? <h2>Sorry, the dictionary doesn't cover this word.</h2> : null}
</div>
      )
// return null;
  }
}
