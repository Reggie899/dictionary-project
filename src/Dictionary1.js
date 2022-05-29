import React, {useEffect, useState, useContext} from "react";
import './App.css';
import axios from "axios";

export default function Dictionary1(props) {
const [keyword, setKeyword] = useState("");

function handleResponse(response) {
    console.log(response.data);

} 

function search(event) {
    event.preventDefault();
// alert(`Searching for ${keyword} defnition`)
let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
axios.get(apiUrl).then(handleResponse);
}




    return (
        <div>
 <h1 className="dictionaryh1"><div>Diction<span style={{color: "yellow"}}>a</span><span style={{color: "magenta"}}>r</span></div><div className="tilted">y</div></h1>
        <div className="SearchSection">
        {keyword}

        <form
          id="biggerForm SearchSection"
          onSubmit={search}
        //   onChange={(e) => {
        //     e.preventDefault();
            // setKeyword(e.target.value);
        //    props.setStart(false);
// {/* <input type="search" /> */}
            // alert("test");
        //   }}
        >
                      <div className="col-8">

          <input
            type="search"
            placeholder="Enter city here..."
            className="form-control"
            id="bigForm"
            // autofocus="on"
            // autocomplete="on"
            // onChange={(e) => setTest(e.target.value)}
            onChange={(e) => setKeyword(e.target.value)}

          />
                      </div>
                      <div className="col-4">

            <div className="searchButton">
              <input
                type="submit"
                className="btn btn-light"
                id="bigButton"
                value="Search"
              />
            </div>
            </div>

        </form>

        <div>
        </div>
      </div>
      </div>
    )
}