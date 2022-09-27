import "./square.css"
import { Link } from "react-router-dom"

const Square = () => {
  return (
    <>
    <div className="leftSide">
    
    

      <Link className="link" to = "/projectSix">
      <div className="squares squareProject6">
        
        
        
      </div>
      </Link>
    
      <Link className="link" to = "/projectOne">
      <div className="squares squareProject">
      
        
        

      </div>
      </Link>
      
      
      <Link className="link" to = "/projectTwo">
      <div className="squares squareProject2">
        
      
   

      </div>
      </Link>
      

      <Link className="link" to = "/projectThree">
      <div className="squares squareProject3">
        

      </div>
      </Link>


      <Link className="link" to = "/projectFour">
      <div className="squares squareProject4">
        
          </div>
          </Link>


          <Link className="link" to = "/projectFive">
      <div className="squares squareProject5">
        
      </div>
      </Link>

      <Link className="link" to = "/linkedin">
      <div className="squares squareHome">
      
        
      </div>
      </Link>

      

      <Link className="link" to = "/resume">
      <div className="squares resumeSquare">
        
        
      </div>
      </Link>


      <Link className="link" to = "/youtube">
      <div className="squares youtubeSquare">
       
        
      </div>
      </Link>


    </div>

    </>
  )
}

export default Square