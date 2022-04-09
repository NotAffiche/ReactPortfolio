import React from "react";
import MyImage from '../assets/pic.jpg';

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-14 py-20 md:flex-row flex-col items-center">
        <div className="text-justify text-base text-gray-400">
          <h1 className="text-lg text-gray-200 mb-1">
            <span className="text-primairy mr-1">0.1</span>About me
          </h1>
          <div className="grid grid-cols-2">
            <div>
              <p className="mb-1 pb-2">
                Hello, I am Adrian. I am a self taught full-stack software developer. I work on front-end and back-end systems. Currently work as a freelancer and do not have a fulltime contract.
              </p>
              <p className="mb-1 pb-2">
                My software development journey started when I was 12 years old by making plugins for open source games like Minecraft. That quickly evolved into modding and further down the line into making back-end and web applications.<br />
                Today I am enrolled in the software development course at Karel de Grote-hogeschool in Antwerp, Belgium. In my free time I try to expand my knowledge by studying systems and technologies that are not being taught in my program.
              </p>
              <div>
              <p className="mb-1">
                These are some of the technologies I have experience working with:
              </p>
              <div className="grid grid-cols-2 mb-1">
                  <ul>
                    <li>Front-End</li>
                    <li><span className="text-primairy">- </span>HTML5, CSS3, JavaScript(ES6)</li>
                    <li><span className="text-primairy">- </span>Node.js</li>
                    <li><span className="text-primairy">- </span>React.js</li>
                  </ul>
                  <ul>
                    <li>Back-End</li>
                    <li><span className="text-primairy">- </span>Java</li>
                    <li><span className="text-primairy">- </span>C#</li>
                    <li><span className="text-primairy">- </span>VB.net</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
            <image className="flex flex-wrap justify-center w-6/12 sm:w-4/12">
              <img src={MyImage} alt="Adrian" className="shadow rounded object-contain border-none"></img>
            </image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}