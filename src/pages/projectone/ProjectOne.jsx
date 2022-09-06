import NavBar from "../../components/navbar/NavBar"
import RightSideProjectOne from "../../components/rightSideProjectOne/RightSideProjectOne"
import Square from "../../components/squares/Square"
import "./projectOne.css"

const ProjectOne = () => {
  return (
    <div className="mainProjectOne">
        <NavBar/>
        <div className="featured">
        <Square/>
        <RightSideProjectOne/>

        </div>
        

    </div>
  )
}

export default ProjectOne