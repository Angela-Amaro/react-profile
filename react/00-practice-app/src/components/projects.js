import React from "react";
import { project } from "../utils/info";

function Projects() {
  <section id="projects">
    <div className="container px-5 py-10 mx-auto text-center lg:px-40">
      <div className="flex flex-col w-full mb-20">
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">
          Projects
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Here are some of my projects
        </p>
      </div>
      <div className="flex flex-wrap -m-4">
        {project.map((project) => (
          <a
            href={project.link}
            key={project.title}
            className="sm:w-1/2 w-100 p-4"
          >
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={project.image}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <p className="loading-relaxed">{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>;
}

export default Projects;
