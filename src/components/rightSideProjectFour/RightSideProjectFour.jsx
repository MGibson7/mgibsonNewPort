import { useState } from "react";
import "./rightSideProjectFour.css"

const RightSideProjectFour = () => {
  const [display5, setDisplay5] = useState(false);
  const handleDisplay5 = () =>{
    setDisplay5(display5? false: true)
  }
  return (
    <div className = "rightSide">
      <div className="projectFea">
        <img scrolling="no" className="iframeImg" src="./algo.png" alt="AlgoFlix"></img>
        <a href="https://algoflix.herokuapp.com/" target = "_blank" rel="noreferrer noopener"><button>LIVE SITE</button></a>
        <a href="https://github.com/MGibson7/algoflix" target = "_blank" rel="noreferrer noopener"><button className="source">SOURCE CODE</button></a>
        <button className="projectInfo" onClick={handleDisplay5}>INFO</button>
        <p className="descript" style={{display: display5? 'flex' : 'none'}}>A full stack Netflix clone to host my algorithm videos. Utilizes MongoDB, Express, React, NodeJS, and SCSS </p>
        </div> 
    </div>
  )
}

export default RightSideProjectFour