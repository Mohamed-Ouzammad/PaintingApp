import React from "react";
import "./App.css";

function Navbar({ searchTerm, onSearchChange }) {
    return (
        <nav className="navbar">
            <h1>Mes Peintures Préférées</h1>
            <input
                type="text"
                placeholder="Rechercher une peinture..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="search-bar"
            />
        </nav>
    );
}

export default Navbar;
