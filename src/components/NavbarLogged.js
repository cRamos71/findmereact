import "./css/Navbar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/NavbarLogged.css";
import { Link } from "react-router-dom";


function NavbarLogged (onAuthenticationChange){

    function handleLogOut(){
        sessionStorage.clear();
        window.location.href = ("/");
    }
    
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
                                <Link  className="nav-link" to="/friends"><b>Friends</b></Link>
                            </li>
                            <li className="nav-item">
                                <Link  className="nav-link" ><i class="bi bi-bell"></i></Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a className="nav-link dropdown-toggle"  id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="/">
                                <i className="bi bi-person-circle"></i>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                                    <div className="row">
                                        <label id="droplbl"><b>Logged as ➜ {sessionStorage.getItem("username")}</b></label>
                                    </div>
                                    <li><a className="dropdown-item" href="/"><b>Action</b></a></li>
                                    <li><a className="dropdown-item" href="/"><b>Another action</b></a></li>
                                    <li><Link className="dropdown-item" onClick={handleLogOut} ><b>Sign-Out</b></Link></li>
                                </ul>
                            </li>       
                        </ul>  
                    </div>
                </div>
            </nav>
    </div>
    );
};

export default NavbarLogged;