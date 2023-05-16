import "./css/Navbar.css";


function Navbar (){


    return(
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg py-5">
                <div className="container-fluid">
                    <a className="nav-name" id="bigtitle" href="#home"
                    ><b><label id="ltitle">Find</label>Me</b></a>
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
                        <a className="nav-link" href="login.html"><b>Login</b></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="about.html"><b>About</b></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="contacts.html"><b>Contacts</b></a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
    </div>
    );
};

export default Navbar;