import { useState } from "react";
import "./rightSideProjectOne.css"

const RightSideProjectOne = () => {
  const [display5, setDisplay5] = useState(false);
  const handleDisplay5 = () =>{
    setDisplay5(display5? false: true)
  }
  return (
    <div className = "rightSide">
      <div className="projectFea">
        <iframe scrolling="no" className="iframeImg" src="https://ecommhalloween.vercel.app/" title="HalloweenEcomm"></iframe>
        <a href="https://ecommhalloween.vercel.app/" target = "_blank" rel="noreferrer noopener"><button>LIVE SITE</button></a>
        <a href="https://github.com/MGibson7/ecommhalloween" target = "_blank" rel="noreferrer noopener"><button className="source">SOURCE CODE</button></a>
        <button className="projectInfo" onClick={handleDisplay5}>INFO</button>
        <p className="descript" style={{display: display5? 'flex' : 'none'}}>Halloween ECommerce App </p>
        </div> 
    </div>
  )
}

export default RightSideProjectOne