import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/navBar.css';

export class NavBar extends Component {
    state = {
        showStoreNav: '',
        showStoreX: 'none'
    }

    activeNavResponsive = () => {
        this.setState({
            showStoreNav: 'block',
            showStoreX: 'block'
        });
    }

    desactiveNavResponsive = () => {
        this.setState({
            showStoreNav: 'none',
            showStoreX: 'none'
        });
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg position-fixed navbar-dark bg-transparent">
                <div className="container-fluid">
                    <button className="navbar-toggler button-nav-1"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo03"
                        aria-controls="navbarTogglerDemo03"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={() => this.activeNavResponsive()}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse nav-struct"
                         id="navbarTogglerDemo03"
                         style={{
                            display: this.state.showStoreNav }
                        }
                    >
                        <Link className="navbar-brand" to="/">SEYO</Link>

                        <button type="button"
                            className="close button-nav-2 bg-transparent"
                            aria-label="Close"
                            style={{
                                display: this.state.showStoreX }
                            }
                            onClick={() => this.desactiveNavResponsive()}
                            >
                            <span aria-hidden="true">&times;</span>
                        </button>

                        <ul className="navbar-nav nav-struct-ul">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/production">Production</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/musicians">Musicians</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/clients">Clients</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}