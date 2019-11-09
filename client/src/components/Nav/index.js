import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link to="/" className="navbar-brand">Navbar</Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/saved_articles" className="nav-link">Saved</Link>
                </li>
            </ul>
        </nav>
    )
}