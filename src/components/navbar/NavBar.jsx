import { Link } from "react-router-dom"
import "./navbar.css"

const NavBar = () => {
  return (
    <div className="navMain">
      <Link to = "/">
      <h1>MCG</h1>
        <h1 className="port">PORTFOLIO</h1>
      </Link>
        

    </div>
  )
}

export default NavBar