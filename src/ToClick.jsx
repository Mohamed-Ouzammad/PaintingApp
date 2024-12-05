import React from "react";

function ToClick({ children, onClick, isClickable }) {
    return (
        <div
            className={`to-click ${isClickable ? "clickable" : ""}`}
            onClick={isClickable ? onClick : undefined}
        >
            {children}
        </div>
    );
}

export default ToClick;
