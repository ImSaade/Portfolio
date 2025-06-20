import "../src/styles/App.css";
import Header from "./components/Header/Header";
import AboutMe from "./components/About/AboutMe"
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <Header />
      <AboutMe/>
      <Skills/>
      <Education/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
