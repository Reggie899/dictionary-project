import React, { useState } from "react";

import Meaning from "./Meaning";
import Phonetic from "./Phonetic";


export default function Result(props) {
  console.log("Result", props.result);
  if (props.result) {
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
return null;
  }
}
