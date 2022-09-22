import "./SearchBar.scss";
import axios from "axios";
import { useState } from "react";
import Card from "../Card/Card";
// import SkeletonLoading from "../SkeletonLoading/SkeletonLoading";
import "react-loading-skeleton/dist/skeleton.css";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" + search + "&key="
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <div className="search-wrapper">
        <h1>
          Your favorite <span style={{ color: "#3ec281" }}>Books</span> are just
          one Search away!
        </h1>
        <div className="search-form">
          <input
            type="text"
            className="search-bar"
            placeholder="search for books"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={searchBook}
          />
          <button className="input-btn" onClick={searchBook}>
            search
          </button>
        </div>
        {/* <div className="skeleton-container">
        <SkeletonLoading cards={9} />
      </div> */}
        <div className="card-container">
          <Card book={bookData} />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
