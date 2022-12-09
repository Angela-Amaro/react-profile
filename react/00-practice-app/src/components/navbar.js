import React from "react";

function Navbar() {
    return (
        <header className="text-gray-400 bg-gray-900 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <button className="title-font font-medium text-white mb-4 md:mb-0">
                    <a href="#about" className="ml-3 text-xl">
                        Angela Amaro
                    </a>
                </button>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a href="#about" className="mr-5 hover:text-white">
                        past projects
                    </a>
                    <a href="#resume" className="mr-5 hover:text-white">
                        Developer Skills
                    </a>
                    </nav>
                    <a
                        href="#contact"
                        className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
                    >
                        Contact Me
                    </a>
                </div>
            </header>

    );
}

export default Navbar;