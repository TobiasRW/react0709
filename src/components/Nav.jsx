import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <img src="./src/assets/rejselogo.svg" alt="logo" className="logo" />
            <div className="navLinks">
                <NavLink to="/">Hjem</NavLink>
                <NavLink to="/about">Rejser</NavLink>
                <NavLink to="/contact">Om Os</NavLink>
            </div>
        </nav>
    );
}