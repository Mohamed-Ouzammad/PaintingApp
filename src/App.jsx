import PaintingDisplay from './PaintingDisplay';

function App() {
  const paintings = [
    {
      title: "Portrait of Don Ramón Satué",
      author: "Francisco de Goya",
      imageUrl: "https://lh3.googleusercontent.com/SwwiVAxnwFE_s-k7-bPOZ6jnGfcuVDJoZ-ofLb0Zispb-mJdsfasrE1nTPRcGDPwyEqY0txKpjPcAWaIIltYvvPtDA8=s0",
    },
    {
      title: "Still Life with Asparagus",
      author: "Adriaen Coorte",
      imageUrl: "https://lh3.googleusercontent.com/qEnlrp5MyHgLIVvrQR3HYtMBhQaLsxCmhBB15DCxX07l_rAvKqjKAXgCkgigYYxA2hGls9riG6Xfn_K_V5_GMfd_0bE=s0",
    },
    {
      title: "The Fête champêtre",
      author: "Dirck Hals",
      imageUrl: "https://lh3.googleusercontent.com/zjehg1KWc2C2s4c3ThD3v1ROk8PFjj2c-6ZcIoLzmBp-bQ17AkF7EijTqWuXx6YbGWrAJA04Tqm3AVcLsqEifHEyMAbEoZ9ROiUUZjbYNw=s0",
    },
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", padding: "20px" }}>
      {paintings.map((painting, index) => (
        <PaintingDisplay
          key={index}
          title={painting.title}
          author={painting.author}
          imageUrl={painting.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
