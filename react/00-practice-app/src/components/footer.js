import React from "react";

export default function Footer () {
    return (
        <footer className="p-4 bg-white rounded-lg shadow md:flew md:items-center md:justify-between md:p-6 dark:bg-gray-800">
            <ul className="flex flex-wrap justify-center items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li><a href="https://github.com/Angela-Amaro" className="mr-4 text-xl hover:underline md:mr-6">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/angela-amaro-342792204/" className="mr-4 text-xl hover:underline md:mr-6">LinkedIn</a></li>
                <li><a href="https://www.instagram.com/cupcakealaska/?hl=en" className="text-xl hover:underline">Instagram</a></li>
            </ul>
        </footer>
    )
}