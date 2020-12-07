import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav (){
    return (
        <nav className="a navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <Link to="/about" className="navbar-brand">
                <span className="d-block">Kate Dorse</span>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="a nav-item js-scroll-trigger">
                    <Link to="/about" className="nav-link">
                        About
                    </Link>                
                    </li>   
                    <li className="a nav-item js-scroll-trigger">
                    <Link to="/portfolio" className="nav-link">
                        Portfolio
                    </Link>                
                    </li>

                </ul>
            </div>

        </nav>
    );
}

export default Nav;