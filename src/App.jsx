import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Projects, StarsCanvas } from "./components";
import DennisHero from "./components/DennisHero"; // Create this new component for Dennis

const App = () => {
  return (
    <Router>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Hero} />
            <Route path="/dennis" component={DennisHero} />
          </Switch>
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
