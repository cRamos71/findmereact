import "./css/Navbar.css";
import "./css/NavbarLogged.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";


function NavbarLogged (onAuthenticationChange){

    return(
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg py-5">
                <div className="container-fluid">
                    <Link className="nav-name" id="bigtitle" to="/"
                    ><b><label id="ltitle">Find</label>Me</b></Link>
                    <button
                    className="navbar-toggler shadow-none custom-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseNavbar"
                    aria-expanded="false"
                    > 
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse" id="collapseNavbar">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                        <Link className="nav-link" to="/dashboard"><b>Dashboard</b></Link>
                        </li>
                        <li className="nav-item">
                        <Link  className="nav-link" to="/about"><b>Friends</b></Link>
                        </li>
                        <li className="nav-item">
                        <Link  className="nav-link" ><i class="bi bi-bell"></i></Link>
                        </li>
                        <li>
                        <Link  className="nav-link" onClick={() => onAuthenticationChange(false)}><i className="bi bi-person-circle"></i></Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
    </div>
    );
};

export default NavbarLogged;