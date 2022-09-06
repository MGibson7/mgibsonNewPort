import NavBar from "../../components/navbar/NavBar"
import RightSideYoutube from "../../components/rightSideYoutube/RightSideYoutube"
import Square from "../../components/squares/Square"
import "./youtube.css"

const Youtube = () => {
  return (
    <div className="mainYoutube">
        <NavBar/>
        <div className="featured">
        <Square/>
        <RightSideYoutube/>

        </div>
        

    </div>
  )
}

export default Youtube