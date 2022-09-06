import { useState } from "react";
import "./rightSideProjectFive.css"

const RightSideProjectFive = () => {
  const [display5, setDisplay5] = useState(false);
  const handleDisplay5 = () =>{
    setDisplay5(display5? false: true)
  }
  return (
    <div className = "rightSide">
      <div className="projectFea">
        <img scrolling="no" className="iframeImg" src="./mynet.png" alt="Networth"></img>
        <a href="https://mgibson7.github.io/networthStatement/" target = "_blank" rel="noreferrer noopener"><button>LIVE SITE</button></a>
        <a href="https://github.com/MGibson7/networthStatement" target = "_blank" rel="noreferrer noopener"><button className="source">SOURCE CODE</button></a>
        <button className="projectInfo" onClick={handleDisplay5}>INFO</button>
        <p className="descript" style={{display: display5? 'flex' : 'none'}}>Networth Tool to Calculate and see where you stack up based on age </p>
        </div> 
    </div>
  )
}

export default RightSideProjectFive