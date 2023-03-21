import React from "react";
import { skills } from "../utils/info";
function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-5 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">
            {" "}
            My Skills
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here are some of my skills that I have "developed" in the Bootcamp.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap lg:wg-4/5 sm:mx-auto sm:mb-2 -mx-2">
        {skills.map((skill) => (
          <div key={skill} className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <span className="title-font font-medium text-white">
                {skill.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
