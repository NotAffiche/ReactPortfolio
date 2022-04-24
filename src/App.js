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

        <div className="relative h-32 w-32">
          <div className="fixed bottom-0 my-32 right-8 h-16 w-16 rotate-90 text-justify"><hr className="w-96"></hr>adrian.biedny@gmail.com</div>
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
