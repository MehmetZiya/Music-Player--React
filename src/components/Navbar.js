import { NavLink } from "react-router-dom";

function Navbar(props) {
    return (
        <nav className="navbar">
            <h2>The Music Player</h2>
            <div className="navlinks">
                {props.navLinks.map((link, i) => (
                    <NavLink key={i} to={link.path}>
                      {link.name}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;