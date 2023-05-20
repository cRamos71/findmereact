import "./css/Navbar.css";
import { Link } from "react-router-dom";


function Navbar (){

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
                        <Link className="nav-link" to="/auth"><b>Auth</b></Link>
                        </li>
                        <li className="nav-item">
                        <Link  className="nav-link" to="/about"><b>About</b></Link>
                        </li>
                        <li className="nav-item">
                        <Link  className="nav-link" to="/contacts"><b>Contacts</b></Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
    </div>
    );
};

export default Navbar;