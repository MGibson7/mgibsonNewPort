import NavBar from "../../components/navbar/NavBar"
import RightSideProjectFive from "../../components/rightSideProjectFive/RightSideProjectFive"
import Square from "../../components/squares/Square"
import "./projectFive.css"

const ProjectFive = () => {
  return (
    <>
    <div className="mainProjectFive">
        <NavBar/>
        <div className="featured">
        <Square/>
        <RightSideProjectFive/>

        </div>
        

    </div>
    </>
  )
}

export default ProjectFive