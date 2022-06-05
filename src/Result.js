import React from "react";

import Meaning from "./Meaning";


export default function Result(props) {
  console.log("Result", props.result);

  if (props.result) {
    return <div className="Results">

<h2>{props.result.word}</h2>
{props.result.meanings.map(function(meaning, index){
  return <div key={index}>
    <Meaning meaning={meaning} />
    </div>  // meaning.definitions[0].definition;
})}
    </div>;
  } else {
      return null;
  }
}
