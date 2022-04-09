import React from "react";

export default function Introduction() {
  return (
    <section id="intro">
      <div className="mx-auto my-40 flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="mx-auto">
          <h1 className="text-lg text-primairy mb-5">
              Hi, my name is<br />
              <span className="font-semibold text-6xl text-gray-200">Adrian Biedny.</span>
          </h1>
          <h2 className="text-xl text-gray-200">I code for front and backend.</h2>
          <p className="text-base text-gray-400">
              I am a mostly self taught full-stack software developer with the hopes of one day creating my own video game studio.
          </p>
        </div>
      </div>
    </section>
  );
}