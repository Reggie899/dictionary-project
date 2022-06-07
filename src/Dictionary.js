import React, { useEffect, useState, useContext } from "react";
import "./App.css";
import "./Dictionary.css";
import axios from "axios";
import Result from "./Result";

export default function Dictionary1(props) {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState(null);
  const [noResult, setNoResult] = useState(false);
  const [failedWord, setFailedWord] = useState("");

  function handleResponse(response) {
    setNoResult(false);
    console.log(response.data);
    console.log(response.data[0].meanings[0].definitions[0].definition);
    setResult(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch((err) => setNoResult(true), setFailedWord(keyword));
  }

  return (
    <div className="container">
      <h1 className="dictionaryh1">
        <div>
          Diction<span style={{ color: "yellow" }}>a</span>
          <span style={{ color: "magenta" }}>r</span>
        </div>
        <div className="tilted">y</div>
      </h1>
      <div className="SearchSection">
        <section className="formSection">
          <form  onSubmit={search}>
            <div className="col-8">
              <input
                type="search"
                placeholder="Enter word here... 👀"
                className="form-control"
                id="form"
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>
            <div className="col-4">
              <input type="submit" id="bigButton" value="🔎" />
            </div>
          </form>
        </section>
        {noResult ? (
          <h2 style={{ color: "white", marginLeft: "10%" }}>
            Sorry, <span style={{ color: "magenta" }}>{failedWord}</span> was
            not found 💀{" "}
          </h2>
        ) : (
          <Result result={result} />
        )}
      </div>
      <footer>
        <div style={{ textAlign: "center" }}>
          <div>
            <a
              href="https://github.com/Reggie899/dictionary-project/tree/master/src"
              target="_blank"
            >
              My code
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
