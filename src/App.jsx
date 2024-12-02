import PaintingDisplay from './PaintingDisplay';
import './App.css';

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
    {
      title: "River Landscape with Riders",
      author: "Aelbert Cuyp",
      imageUrl: "https://lh3.googleusercontent.com/X7_CHCjksOZYu4gIGa45Edj1tMymdiz2o3pbL6HqqVEszWvPzrM6iIwHzaWNqgsWLcm7VmHCQyuQowWSSImQYLF8qW48zmZ-rx309F3c=s0",
    },
    {
      title: "The Massacre of the Innocents",
      author: "Cornelis Cornelisz. van Haarlem",
      imageUrl: "https://lh5.ggpht.com/JH0svNh0Pkov_W97MDHw8v2-qKS8AdixVJ-CiPL_xBECNdEyTBkicMvZBsqgW6GQ0TB9moKnfGUYacWQS32rqeoEjA4=s0",
    },
    {
      title: "Banquet at the Crossbowmen’s Guild in Celebration of the Treaty of Münster",
      author: "Bartholomeus van der Helst",
      imageUrl: "https://lh3.googleusercontent.com/kmCDKP1kMN72zB-7CHBOBdCnyU3Z-NW7WIzuN_sIqm5n9xf6lG4oTtfcWsGW8qhbVYuwSDkYlhOglx7z4YaFL8UeFWU=s0",
    },
    {
      title: "A Mother Delousing her Child’s Hair, Known as ‘A Mother’s Duty’",
      author: "Pieter de Hooch",
      imageUrl: "https://lh3.googleusercontent.com/6Vm9nYrTeeYe5wl7lOafEHUnbzNF8KJw3ZbV_cNBr_wQTyHyp1DJxEWEEK3OSuji9XGYx04r15HTVPu850WeFcOd0ZVv=s0",
    },
    {
      title: "The Merry Fiddler",
      author: "Gerard van Honthorst",
      imageUrl: "https://lh3.googleusercontent.com/yhCV7ZeW9YjyfRD0cCyvH7HjIzjKpSw0uA238qNblAEFCy3yH6Yu5LRllNFpgcowX0EYmo6CLSJcKM7Tym57pFTvOHXqJNXclGOctmHr=s0",
    },
    {
      title: "Children of the Sea",
      author: "Jozef Israëls",
      imageUrl: "https://lh3.googleusercontent.com/BMvxPb9RF9F-qz68PAIIrROTp7G352oNEzZWmmT-H1YXSgf2Id33oQBssFYnPL52KwiyFgYY1pSInpEVrhrx1OViFQ=s0",
    },
  ];

  return (
    <div>
      <h1 className="page-title">Bienvenue, voici mes plus belles peintures</h1>
      <div className="painting-grid">
        {paintings.map((painting, index) => (
          <PaintingDisplay
            key={index}
            title={painting.title}
            author={painting.author}
            imageUrl={painting.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
