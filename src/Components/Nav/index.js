import React from "react";
import { Link } from "react-router-dom";
 import "./style.css";



function Nav (){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <Link to="/about" className="a navbar-brand ">
                <span className="d-block d-lg-none">Kate Dorse</span>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="a nav-item js-scroll-trigger">
                    <Link to="/" className="a nav-link">
                        About
                    </Link>                
                    </li>   
                    <li className="a nav-item js-scroll-trigger">
                    <Link to="/portfolio" className="a nav-link">
                        Portfolio
                    </Link>                
                    </li>
                    <li className="a nav-item js-scroll-trigger">
                        <a href="https://docs.google.com/document/d/e/2PACX-1vQqyDmNgsNo3xtLnTQT0Ek_7O7pCZAEZV_sezyncLNQK8PHski6sOKOaH64FOW7Z6A6fDT0Sph2csYx/pub" rel="noreferrer noopener" target="_blank" className="a nav-link">
                            Resume
                        </a>                
                    </li>

                </ul>
            </div>

        </nav>
    );
}

export default Nav;