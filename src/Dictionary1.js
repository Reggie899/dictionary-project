import React, {useEffect, useState, useContext} from "react";
import './App.css';

export default function Dictionary1(props) {
const [keyword, setKeyword] = useState("");

function search(event) {
    event.preventDefault();
    setKeyword(event);
}


    return (
        <div>
 <h1 className="dictionaryh1"><div>Diction<span style={{color: "yellow"}}>a</span><span style={{color: "magenta"}}>r</span></div><div className="tilted">y</div></h1>
        <div className="SearchSection">
        {keyword}

        <form
          id="biggerForm SearchSection"
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