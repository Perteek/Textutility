import Navbar from "./components/Navbar";
import PropTypes from 'prop-types'
import Textform from "./components/Textform";
import About from "./components/About";
import LoadingBar from 'react-top-loading-bar'
import { useState } from "react";

function App() {
  const[progress,setprogress]=useState(0)
  const [mode,setmode]=useState("light")
  const togglemode=()=>{
    if(mode==="light"){
      setmode("dark")
      document.body.style.backgroundColor="black"
    }else{
      setmode("light")
      document.body.style.backgroundColor="white"
    }
    }
  return (
    <> 
    <Navbar title="Text-Utility" mode={mode} togglemode={togglemode}/>
    <div className="container my-3">
    <LoadingBar
        color='#f11946'
        progress={progress}
      />
    <Textform heading="Enter the text to analize" setprogress={setprogress} mode={mode}/>
    <About/>
    </div>
    </>
  );
}

export default App;

Navbar.propTypes={
  title: PropTypes.string.isRequired
}
Navbar.defaultProps={
  title:"Text-Utility"
}