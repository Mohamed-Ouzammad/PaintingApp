import React from "react";

function Pagination({ currentPage, totalPages, onPageChange, onReset }) {
    const handlePreviousPage = () => {
        if (currentPage > 1) onPageChange(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) onPageChange(currentPage + 1);
    };

    return (
        <div className="pagination">
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                Précédent
            </button>
            <span>
                Page {currentPage} sur {totalPages}
            </span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                Suivant
            </button>
            <button onClick={onReset}>Reset</button>
        </div>
    );
}

export default Pagination;
