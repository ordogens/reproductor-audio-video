import "./NavBar.css";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="NavBar">
        <nav>
            <ul>
                <NavLink to={"/"}> <h3 className="H2" >Home</h3> </NavLink>
                <NavLink to={"/reproductores"}> <h3 className="H2" >reproductor</h3> </NavLink>
                <NavLink to={"/parte3"}> <h3 className="H2" >Parte 3</h3> </NavLink>
            </ul>
        </nav>
    </div>
  )
}
