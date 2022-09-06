import NavBar from "../../components/navbar/NavBar"
import RightSideHome from "../../components/rightsidehome/RightSideHome"
import Square from "../../components/squares/Square"
import "./home.css"

const Home = () => {
  return (
    <div className="main">
        <NavBar/>
        <div className="featured">
        <Square/>
        <RightSideHome/>

        </div>
        

    </div>
  )
}

export default Home