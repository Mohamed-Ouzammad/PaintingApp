function PaintingDisplay({ title, author, imageUrl }) {
    return (
        <div style={{ width: "300px", textAlign: "center", border: "1px solid #ccc", borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
            <img
                src={imageUrl}
                alt={title}
                style={{ width: "100%", height: "auto" }}
            />
            <div style={{ padding: "10px" }}>
                <h3 style={{ margin: "10px 0", fontSize: "18px", color: "#333" }}>{title}</h3>
                <p style={{ margin: 0, fontSize: "14px", color: "#777" }}>{author}</p>
            </div>
        </div>
    );
}

export default PaintingDisplay;
