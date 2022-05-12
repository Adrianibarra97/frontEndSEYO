import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/navBar.css';

export class NavBar extends Component {


    render() {
        return (
            <nav class="navbar navbar-expand-lg position-fixed navbar-dark bg-transparent">
                <div class="container-fluid">
                    <button class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo03"
                        aria-controls="navbarTogglerDemo03"
                        aria-expanded="false"
                        aria-label="Toggle navigation"

                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <Link class="navbar-brand" to="/">SEYO</Link>
                    
                    <div class="collapse navbar-collapse"
                         id="navbarTogglerDemo03"
                    >
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/production">Production</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/musicians">Musicians</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/clients">Clients</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}