import React, { useState } from "react";

import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Result(props) {
  console.log("Result", props.result);
  if (props.result) {
    return (
      <div className="Results">
        <section className="h2Section">
          <h2 style={{ display: "flex", justifyContent: "center" }}>
            {" "}
            {props.result.word}{" "}
          </h2>
        </section>
        {props.result.meanings.map(function (meaning, index) {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "5%"
              }}
            >
              <section className="borderMagenta meaningSection" key={index}>
                <Meaning meaning={meaning} />
              </section>{" "}
            </div>
          );
        })}
          {props.result.phonetics.map(function (phonetic, index) {
            return (
              <section className="phoneticSection">
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
              </section>
            );
          })}
      </div>
    );
  } else {
    return null;
  }
}
