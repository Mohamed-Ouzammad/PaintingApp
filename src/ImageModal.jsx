import React from 'react';

function ImageModal({ imageUrl, onClose, description }) {
    if (!imageUrl) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>&times;</span>
                <img src={imageUrl} alt="Selected" className="modal-image" />
                {description && (
                    <div className="description">
                        <h3>Description :</h3>
                        <p>{description}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ImageModal;
