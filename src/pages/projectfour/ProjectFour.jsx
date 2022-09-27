import NavBar from "../../components/navbar/NavBar"
import RightSideProjectFour from "../../components/rightSideProjectFour/RightSideProjectFour"
import Square from "../../components/squares/Square"
import "./projectFour.css"

const ProjectFour = () => {
  return (
    <>

    <div className="mainProjectFour">
        <NavBar/>
        <div className="featured">
        <Square/>
        <RightSideProjectFour/>

        </div>
        

    </div>
    </>
    
  )
}

export default ProjectFour