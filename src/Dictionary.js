import React, { useEffect, useState, useContext } from "react";
import "./App.css";
import "./Dictionary.css";
import axios from "axios";
import Result from "./Result";
import Photos from "./Photos";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState(null);
  const [noResult, setNoResult] = useState(false);
  const [failedWord, setFailedWord] = useState("");
  const [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setNoResult(false);
    // console.log(response.data);
    // console.log(response.data[0].meanings[0].definitions[0].definition);
    setResult(response.data[0]);
  }

  function handlePexelsResponse(response) {
    console.log("PEXELS", response.data.photos);
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios
      .get(apiUrl)
      .then(handleDictionaryResponse)
      .catch((err) => setNoResult(true), setFailedWord(keyword));

    let pexelsApiKey =
      "563492ad6f91700001000001c7580de00b32486aa0887a911d91d3fe";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
          <form onSubmit={search}>
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
          <div>
            <Result result={result} />
            <Photos photos={photos} />
          </div>
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
