import React from "react";

function ImageModal({ imageUrl, onClose }) {
    if (!imageUrl) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={imageUrl} alt="Zoomed" />
                <button className="close-button" onClick={onClose}>Fermer</button>
            </div>
        </div>
    );
}

export default ImageModal;
