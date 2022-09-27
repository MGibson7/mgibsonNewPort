import NavBar from "../../components/navbar/NavBar"
import RightSideLinkedIn from "../../components/rightSideLinkedIn/RightSideLinkedIn"

import Square from "../../components/squares/Square"
import "./linkedIn.css"

const LinkedIn = () => {
  return (
    <div className="mainLinkedIn">
        <NavBar/>
        <div className="featured">
        <Square/>
        <RightSideLinkedIn/>

        </div>
        

    </div>
  )
}

export default LinkedIn