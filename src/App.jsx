import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Projects, StarsCanvas } from "./components";
import DennisHero from "./components/DennisHero"; // Create this new component for Dennis

const App = () => {
  return (
    <Router>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Hero />} />
            <Route path="/dennis" element={<DennisHero />} />
          </Routes>
        </div>
        <About />
        <Projects />
        <Tech />
        <Experience />
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>
    </Router>
  );
}

export default App;
