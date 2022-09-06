import NavBar from "../../components/navbar/NavBar"
import RightSideResume from "../../components/rightSideResume/RightSideResume"
import Square from "../../components/squares/Square"
import "./resume.css"

const Resume = () => {
  return (
    <div className="mainResume">
        <NavBar/>
        <div className="featured">
        <Square/>
        <RightSideResume/>

        </div>
        

    </div>
  )
}

export default Resume