import NavBar from "../../components/navbar/NavBar"
import RightSideProjectTwo from "../../components/rightSideProjectTwo/RightSideProjectTwo"
import Square from "../../components/squares/Square"
import "./projectTwo.css"

const ProjectTwo = () => {
  return (
    <div className="mainProjectTwo">
        <NavBar/>
        <div className="featured">
        <Square/>
        <RightSideProjectTwo/>

        </div>
        

    </div>
  )
}

export default ProjectTwo