import React, {useState} from "react";
import Footer from "./footer";
import About from "./about";
import Navbar from "./navbar";
import Contact from "./contact";
import Resume from "./resume";
import Projects from "./projects";

function Homepage() {
    const [currentPage, handlePageChange ] = useState("About");
    
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
    
    
    
    return (
        <div>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        <div>{renderPage(currentPage)}</div>
        <Footer />
        </div>
    );
    }

export default Homepage;