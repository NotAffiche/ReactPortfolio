import React from "react";

export default function Contact() {
  return (
    <section id="contact">
      <div className="items-center">
        <div className="text-center text-base text-gray-400">
          <h1 className="text-lg text-gray-200 mb-1">
            <span className="text-primairy mr-1">0.3</span>Contact
          </h1>
          <p>You can contact me in a couple of ways:</p>
          <ul className="inline-flex bg-gray-400 rounded-lg">
              <li className="">
                <a href="https://github.com/NotAffiche" className="text-primairy">
                  <img height="32" width="32" alt="Github" src="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/github.svg" />
                </a>
              </li>
              <li className="">
                <a href="https://www.linkedin.com/in/adrian-biedny-450742150/" className="text-primairy">
                  <img height="32" width="32" alt="LinkedIn" src="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/linkedin.svg" />
                </a>
              </li>
            </ul>
            <p className="text-primairy"><a href="mailto:adrian.biedny&#64;gmail.com">adrian.biedny&#64;gmail.com</a></p>
        </div>
      </div>
    </section>
  );
}