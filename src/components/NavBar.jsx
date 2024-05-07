import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar sticky-top navbar-expand-sm bg-light">
            <div className="container">
                <a href="#" className="navbar-brand mb-0 h1">
                    <img src={logo} alt="Logo" height={60} />
                </a>
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className={`nav-link ${({ isActive }) =>
                                    isActive && 'active'}`}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/upload"
                                className={`nav-link ${({ isActive }) =>
                                    isActive && 'active'}`}
                            >
                                Upload
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
