function PaintingDisplay({ title, author, imageUrl }) {
    return (
        <div className="painting-card">
            <img src={imageUrl} alt={title} />
            <h3>{title}</h3>
            <p>{author}</p>
        </div>
    );
}

export default PaintingDisplay;
