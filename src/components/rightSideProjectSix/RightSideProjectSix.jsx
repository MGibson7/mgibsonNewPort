import { useState } from "react";
import "./rightSideProjectSix.css"

const RightSideProjectSix = () => {
  const [display6, setDisplay6] = useState(false);
  const handleDisplay6 = () =>{
    setDisplay6(display6? false: true)
  }
  return (
    <div className = "rightSide">
      <div className="projectFea">
        <img scrolling="no" className="iframeImg" src="./ac4biz.png" alt="Networth"></img>
        <a href="https://ac4biz.com" target = "_blank" rel="noreferrer noopener"><button>LIVE SITE</button></a>
        <a href="https://github.com/MGibson7/acdtv" target = "_blank" rel="noreferrer noopener"><button className="source">SOURCE CODE</button></a>
        <button className="projectInfo" onClick={handleDisplay6}>INFO</button>
        <p className="descript" style={{display: display6? 'flex' : 'none'}}>A frontend website for American Communications to provide them with an engaging and interesting web presence. Utilized React, JSX, CSS, Framer Motion.  </p>
        </div> 
    </div>
  )
}

export default RightSideProjectSix