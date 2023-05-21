import './css/Footer.css';

function Footer (){
    return(
        <div className='Footer'>
    <footer className="mt-auto text-center text-lg-start bg-dark">
        <div id="footer-items" className="container d-flex justify-content-center py-1 sticky-bottom">
            <a href="about">
                About
            </a>
            <a href="/contacts">
                Contacts
            </a>
            <a id="up" href="#top">
                ↑
            </a>
        </div>
        <div className="text-center text-white p-1 bg-dark">
            FindMe © 2023 Copyright
        </div>
    </footer>
    </div>
    );
}

export default Footer;