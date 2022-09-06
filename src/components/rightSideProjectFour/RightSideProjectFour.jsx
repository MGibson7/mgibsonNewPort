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
        <iframe scrolling="no" className="iframeImg" src="https://algoflix.herokuapp.com/" title="AlgoFlix"></iframe>
        <a href="https://algoflix.herokuapp.com/" target = "_blank" rel="noreferrer noopener"><button>LIVE SITE</button></a>
        <a href="https://github.com/MGibson7/algoflix" target = "_blank" rel="noreferrer noopener"><button className="source">SOURCE CODE</button></a>
        <button className="projectInfo" onClick={handleDisplay5}>INFO</button>
        <p className="descript" style={{display: display5? 'flex' : 'none'}}>Slimmed Down Netflix clone for Algorithms </p>
        </div> 
    </div>
  )
}

export default RightSideProjectFour