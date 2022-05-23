import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css';

export class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <p className="footer-p name pweb1">Phone</p>
                <p className="footer-p pweb2">15-2629-5717</p>
                <p className="footer-p name pweb3">E-mail</p>
                <p className="footer-p pweb4">seyo.productions@gmail.com</p>
                <p className="footer-p name pdev1">Website developed by</p>
                <p className="footer-p pdev2">Adrian Ibarra</p>
                <ul className="footer-ul">
                    <Link className="fab fa-facebook-f footer-link btn btn-secondary" to="/production" />
                    <Link className="fab fa-twitter footer-link btn btn-secondary" to="/production" />
                    <Link className="fab fa-instagram footer-link btn btn-secondary" to="/production" />
                    <Link className="fab fa-youtube footer-link btn btn-secondary" to="/production" />
                </ul>
            </div>
        );
    }
}