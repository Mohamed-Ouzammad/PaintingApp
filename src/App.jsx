import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import PaintingDisplay from "./PaintingDisplay";
import Pagination from "./Pagination";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const apiKey = "pYwXfSZ3";

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.rijksmuseum.nl/api/en/collection?key=${apiKey}&format=json`
        );
        const result = await response.json();
        const artworks = result.artObjects.map((artwork) => ({
          title: artwork.title,
          author: artwork.principalOrFirstMaker,
          imageUrl: artwork.webImage?.url || "",
        }));
        setData(artworks);
      } catch (error) {
        console.error("Erreur lors du chargement des peintures :", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter(
    (painting) =>
      painting.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      painting.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Navbar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      {isLoading ? (
        <p>Chargement des peintures...</p>
      ) : (
        <>
          <div className="painting-grid">
            {currentItems.map((painting, index) => (
              <PaintingDisplay
                key={index}
                title={painting.title}
                author={painting.author}
                imageUrl={painting.imageUrl}
              />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
}

export default App;
