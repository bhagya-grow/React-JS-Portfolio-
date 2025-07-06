import "./App.css";
import NavBar from "./component/NavBar/NavBar";
import Hero from "./component/Hero/Hero";
import About from "./component/About/About";
import Skills from "./component/Skills/Skills";
import Project from "./component/project/Project.jsx";
import Contact from "./component/Contact/Contact.jsx";
import Footer from "./component/Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
