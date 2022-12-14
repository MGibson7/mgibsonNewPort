import { useState } from "react";
import "./rightSideProjectThree.css"

const RightSideProjectThree = () => {
  const [display5, setDisplay5] = useState(false);
  const handleDisplay5 = () =>{
    setDisplay5(display5? false: true)
  }
  return (
    <div className = "rightSide">
      <div className="projectFea">
        <img scrolling="no" className="iframeImg" src="./alltime.png" alt="Fantasy Football Social"></img>
        <a href="https://fantasyfootballsocial2.herokuapp.com/" target = "_blank" rel="noreferrer noopener"><button>LIVE SITE</button></a>
        <a href="https://github.com/MGibson7/fantasyfootballsocial_final" target = "_blank" rel="noreferrer noopener"><button className="source">SOURCE CODE</button></a>
        <button className="projectInfo" onClick={handleDisplay5}>INFO</button>
        <p className="descript" style={{display: display5? 'flex' : 'none'}}>A full stack social media site. Utilizes MongoDB, Express, React, NodeJS, and CSS  </p>
        </div> 
    </div>
  )
}

export default RightSideProjectThree