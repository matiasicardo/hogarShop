import CardWidget from "../CardWidget/CardWidget"
import './NavBar.css'
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <header>
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
        <Link to={"/"}>
          <h1>HogarShop</h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
        </Link>
          <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
              <NavLink to={`/categoria/1`}>Soportes fijos</NavLink>
              </li>
              <li className="nav-item">
              <NavLink to={`/categoria/2`}>Soportes fijos e inclinables</NavLink>
              </li>
              <li className="nav-item">
              <NavLink to={`/categoria/3`}>Soportes moviles</NavLink>
              </li>
            </ul>
            <CardWidget />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar