import SearchBar from "../../Components/SearchBar/SearchBar";
import Banner from "../../Components/Banner/Banner";

import "./HomePage.scss";
import Recommended from "../../Components/Recommended/Recommended";

const HomePage = () => {
  return (
    <>
      <section className="home-wrapper">
        <Banner />
        <SearchBar />
        <Recommended />
      </section>
    </>
  );
};

export default HomePage;
