import NavBar from "../../components/navbar/NavBar"
import RightSideProjectSix from "../../components/rightSideProjectSix/RightSideProjectSix"
import Square from "../../components/squares/Square"
import "./projectSix.css"

const ProjectSix = () => {
  return (
    <>
    <div className="mainProjectSix">
        <NavBar/>
        <div className="featured">
        <Square/>
        <RightSideProjectSix/>

        </div>
        

    </div>
    </>
    
  )
}

export default ProjectSix