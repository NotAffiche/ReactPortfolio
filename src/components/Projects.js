import React from "react";
import { projects } from "../data";

function createRepositories() {
  return (
    ""
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="mx-auto px-14 py-20">
        <div className="text-right text-base text-gray-400">
          <h1 className="text-lg text-gray-200 mb-1">
            <span className="text-primairy mr-1">0.2</span>Projects
          </h1>
          <p className="mb-1 pb-2">
            Here are some of the projects that I have worked on (these are the public ones on my <a href="https://github.com/NotAffiche?tab=repositories" className="text-primairy">Github</a>).
          </p>
        </div>
        <div className="flex flex-wrap m-4">
          {createRepositories()}
        </div>
      </div>
    </section>
  );
}