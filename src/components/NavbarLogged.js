import "./css/Navbar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/NavbarLogged.css";
import { Link } from "react-router-dom";


function NavbarLogged (onAuthenticationChange){

    function handleLogOut(){

        var requestOptions = {
            method: "POST",
            headers: {
                "Accept": "aplication/json",
                Authorization: sessionStorage.getItem("token")
            },
            body: JSON.stringify({

            })
        };

        fetch("https://api.secureme.me/api/v1/auth/logout", requestOptions)
        .then((response) =>{
            if(response.ok){
                sessionStorage.clear();
                window.location.href = ("/");
            }else alert("There was an error logging out!");
        })

    
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
                                <Link  className="nav-link" to="/followers"><b>Followers</b></Link>
                            </li>
                            <li className="nav-item">
                                <Link  className="nav-link" to="/following"><b>Following</b></Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a className="nav-link dropdown-toggle"  id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="/">
                                <i className="bi bi-person-circle"></i>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                                    <div className="row">
                                        <label id="droplbl"><b>Logged as ➜ {sessionStorage.getItem("username")}</b></label>
                                    </div>
                                    <li><Link className="dropdown-item" to="/profile"><b>Profile</b></Link></li>
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