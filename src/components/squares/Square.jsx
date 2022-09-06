import "./square.css"
import { Link } from "react-router-dom"

const Square = () => {
  return (
    <>
    <div className="leftSide">
    
      <div className="squares squareHome">
      <Link className="link" to = "/">
        <h1>HOME</h1>
        </Link>
      </div>
    
      
      <div className="squares squareProject">
      <Link className="link" to = "/projectOne">
        <h1>PROJECT</h1>
        </Link>

      </div>
      
      
      <div className="squares squareProject2">
        <Link className="link" to = "/projectTwo">
        <h1>PROJECT</h1>
        </Link>
       

      </div>
      

      <div className="squares squareProject3">
        <Link className="link" to = "/projectThree">
        <h1>PROJECT</h1>
        </Link>
      

      </div>
      <div className="squares squareProject4">
        <Link className="link" to = "/projectFour">
        <h1>PROJECT</h1>
        </Link>
      

      </div>
      <div className="squares squareProject5">
        <Link className="link" to = "/projectFive">
        <h1>PROJECT</h1>
        </Link>
        
      </div>
      <div className="squares referralSquare">
        <Link className="link" to = "/referrals">
        <h1>REFERRALS</h1>
        </Link>
        
      </div>

      <div className="squares resumeSquare">
        <Link className="link" to = "/resume">
        <h1>RESUME</h1>
        </Link>
        
      </div>
      <div className="squares youtubeSquare">
        <Link className="link" to = "/youtube">
        <h1>YOUTUBE</h1>
        </Link>
        
      </div>


    </div>

    </>
  )
}

export default Square