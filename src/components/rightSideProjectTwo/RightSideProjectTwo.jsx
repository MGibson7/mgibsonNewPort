import { useState } from "react";
import "./rightSideProjectTwo.css"

const RightSideProjectTwo = () => {
  const [display5, setDisplay5] = useState(false);
  const handleDisplay5 = () =>{
    setDisplay5(display5? false: true)
  }
  return (
    <div className = "rightSide">
      <div className="projectFea">
        <img scrolling="no" className="iframeImg" src="./pfm.png" alt="Personal Finance"></img>
        <a href="https://personalfinancemetrics.netlify.app/" target = "_blank" rel="noreferrer noopener"><button>LIVE SITE</button></a>
        <a href="https://github.com/MGibson7/personalfinancemetrics" target = "_blank" rel="noreferrer noopener"><button className="source">SOURCE CODE</button></a>
        <button className="projectInfo" onClick={handleDisplay5}>INFO</button>
        <p className="descript" style={{display: display5? 'flex' : 'none'}}>Personal Finance App </p>
        </div> 
    </div>
  )
}

export default RightSideProjectTwo