import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3 style={{color: "yellow", fontSize: "2.5em"}}>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div>
              <div style={{fontWeight: "bolder"}}>{index +1}. Defintion: </div> {definition.definition}
              <br />
              <div style={{ fontWeight: "bold", color: "white" }}>
                {" "}
              { definition.example ? <div> Example: {definition.example} </div> : null }
              </div>
              <br />
              <Synonyms synonyms={definition.synonyms} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
