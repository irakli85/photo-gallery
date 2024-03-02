import { NavLink } from "react-router-dom"
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <nav className="nav">
        <img className="logo" src={logo} alt="logo" />
        <NavLink to="/">Home</NavLink>
        <NavLink to="/history">History</NavLink>       
    </nav>
  )
}

export default Header