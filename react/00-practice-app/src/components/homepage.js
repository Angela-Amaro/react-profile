import React, { useState } from "react";
import Footer from "./Footer";
import About from "./About";
import Navbar from "./Navbar";
import Contact from "./Contactform";
import Resume from "./Resume";
import Projects from "./Projects";

function Homepage() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
  };
const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="bg-indigo-500">
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>{renderPage(currentPage)}</div>
      <Footer />
    </div>
  );
}

export default Homepage;
