import React from "react";

async function getProjects(e) {
  e.preventDefault();
  try 
  {
    const url = 'https://api.github.com/users/NotAffiche/repos';
  const response = await fetch(url);
  const json = await response.json();
  console.log(json);
  let result = "";

  for (let i = 0; i < json.length; i++) {
    result += json[i].name + " \n";
  } 

  document.getElementById('projects-content').innerText = result;
  document.getElementById('getProjectsButton').style.display = 'none';
  } catch (err) {
    document.getElementById('projects-content').innerText = err;
    return;
  }
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
        <div className="">
          <button id="getProjectsButton" className="rounded-full px-4 py-2 bg-primairy" onClick={getProjects}>Get Projects</button>
          <div className="flex flex-wrap m-4 text-gray-200" id="projects-content">
          </div>
        </div>
      </div>
    </section>
  );
}