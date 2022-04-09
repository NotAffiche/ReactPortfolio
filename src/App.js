import './App.css';

import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <div className="text-gray-400 flex-row">
        <div class="relative h-32 w-32 ...">
          <div class="fixed bottom-0 my-6 left-8 h-16 w-16">
          <ul className="bg-gray-600 rounded-xl p-1 items-center">
              <li className="mb-2 ml-3 mt-1">
                <a href="https://github.com/NotAffiche" className="text-primairy">
                  <img height="32" width="32" alt="Github" src="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/github.svg" />
                </a>
              </li>
              <li className="mb-2 ml-3 mt-1">
                <a href="https://www.linkedin.com/in/adrian-biedny-450742150/" className="text-primairy">
                  <img height="32" width="32" alt="LinkedIn" src="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/linkedin.svg" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="relative h-32 w-32">
          <div class="fixed bottom-0 my-32 right-8 h-16 w-16 rotate-90 text-justify"><hr className="w-96"></hr>adrian.biedny@gmail.com</div>
        </div>
      </div>
      <Introduction />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
