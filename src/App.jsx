import { useEffect, useState } from "react";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchPosts } from "./services/api";

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(0);
  const [limit] = useState(9);

  useEffect(() => {
    const responseData = async () => {
      try {
        const images = await fetchPosts({ page, limit });
        setImages((prev) => [...prev, ...images]);
      } catch (error) {
        console.log(error.message);
      }
    };
    responseData();
  }, [page, limit]);

  const handleLoadMore = () => {
    setPage((prev) => prev + limit);
  };

  return (
    <>
      <SearchBar />
      <ImageGallery images={images} />
      <button className="s_btn" onClick={handleLoadMore}>
        Load more
      </button>
    </>
  );
}

export default App;
