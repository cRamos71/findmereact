import React from "react";

function FooterLogged(){
    return(
        <div className='Footer'>
    <footer className="mt-auto text-center text-lg-start bg-dark">
        <div id="footer-items" className="container d-flex justify-content-center py-1 sticky-bottom">
            <a href="/followers">
                Followers
            </a>
            <a href="/following">
                Following
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

export default FooterLogged;