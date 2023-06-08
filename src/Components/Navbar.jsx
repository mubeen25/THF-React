// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../Components/Navbar.css';
import logo from '../assets/logo-hunar.png';
import logotiny from '../assets/logo-tiny.png';

function Navbar() {
    return (
        <>
            <section id='Navbar'>
                <div className="logo-container">
                    <img className="logo" src={logo} alt="" />
                </div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img src={logotiny} alt=""/></a>
                        <button className="navbar-toggler nav-tgl" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel"> 
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><img src={logotiny} alt=""
                                     /></h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Institutes</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Features</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Contact Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link enroll-link" href="#">Enroll now</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    );
}

export default Navbar