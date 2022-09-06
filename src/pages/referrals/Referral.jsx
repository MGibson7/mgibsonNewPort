import NavBar from "../../components/navbar/NavBar"
import RightSideReferral from "../../components/rightSideReferral/RightSideReferral"
import Square from "../../components/squares/Square"
import "./referral.css"

const Referral = () => {
  return (
    <div className="mainReferral">
        <NavBar/>
        <div className="featured">
        <Square/>
        <RightSideReferral/>

        </div>
        

    </div>
  )
}

export default Referral