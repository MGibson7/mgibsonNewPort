import NavBar from "../../components/navbar/NavBar"
import RightSideProjectThree from "../../components/rightSideProjectThree/RightSideProjectThree"
import Square from "../../components/squares/Square"
import "./projectThree.css"

const ProjectThree = () => {
  return (
    <div className="mainProjectThree">
        <NavBar/>
        <div className="featured">
        <Square/>
        <RightSideProjectThree/>

        </div>
        

    </div>
  )
}

export default ProjectThree