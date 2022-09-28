import { Link } from "react-router-dom"
import "./navbar.css"

const NavBar = () => {
  return (
    <div className="navMain">
      <Link className="navLink" to = "/">
      <h1>MCG</h1>
      
      </Link>
        

    </div>
  )
}

export default NavBar