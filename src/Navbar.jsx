import React from "react";
import "./App.css";

function Navbar({ searchTerm, onSearchChange }) {
    const handleClear = () => {
        onSearchChange("");
    };

    return (
        <nav className="navbar">
            <h1>Mes Peintures Préférées</h1>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Rechercher une peinture..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="search-bar"
                />
                <button onClick={handleClear} className="clear-button">
                    Clear
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
