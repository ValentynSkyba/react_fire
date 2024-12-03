import { useEffect, useState } from "react";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchPosts } from "./services/api";
import Loader from "./components/Loader/Loader";
import ErrorMassege from "./components/ErrorMassege/ErrorMassege";
import toast from "react-hot-toast";
import ImageModal from "./components/ImegeModal/ImageModal";
import { ToastContainer } from "react-toastify";

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(0);
  const [limit] = useState(9);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totalImages, setTotalImages] = useState(0); // totalImages
  const [imgUrl, setImgUrl] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const responseData = async () => {
      if (!query) return;

      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchPosts({ query, page, limit });
        setImages((prev) => [...prev, ...data.results]);
        setTotalImages(data.total);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    responseData();
  }, [page, limit, query]);

  const handleLoadMore = () => {
    setPage((prev) => prev + limit);
  };

  const handleChangeQuerry = (queryStr) => {
    setQuery(queryStr);
    setPage(0);
    setImages([]);
    setError(false);
  };
  function openModal(imgUrl) {
    setIsOpen(true);
    setImgUrl(imgUrl);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const notify = () => {
    toast("Field is empty...");
    setIsLoading(false);
  };

  return (
    <>
      <SearchBar setQuery={handleChangeQuerry} />
      {query && <h2>Current query: {query}</h2>}

      {totalImages ? <h2>Total images: {totalImages}</h2> : null}

      {error && <ErrorMassege />}
      {isLoading && !error && <Loader />}
      <ImageGallery images={images} openModal={openModal} />

      {totalImages !== 0 && !error && images.length < totalImages && (
        <button className="s_btn" onClick={handleLoadMore}>
          Load more
        </button>
      )}

      <ToastContainer position="top-right" />

      <ImageModal
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        imgUrl={imgUrl}
      />
    </>
  );
}

export default App;
