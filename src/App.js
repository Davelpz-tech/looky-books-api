import { Route, Routes } from "react-router-dom";
import ContactPage from "./Pages/ContactPage/ContactPage";
import HomePage from "./Pages/HomePage/HomePage";

import "./styles.scss";

export default function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </>
  );
}