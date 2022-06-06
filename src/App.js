import React, {useEffect, useState, useContext} from "react";
import Dictionary1 from "./Dictionary1";
import Dictionary2 from "./Dictionary2";
import './App.css';


function App() {
  const [start, setStart] = useState(true);


const startDict = () => {
  setStart(false);
}


  return (
    <div className="App">
     {start ? <Dictionary1 setStart={setStart}/> : <Dictionary2/> }
{/* <button onClick={() => startDict()}>Here</button> */}
    </div>
  );
}

export default App;
