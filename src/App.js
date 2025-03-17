import Navbar from "./Components/Navbar/navbar";
import Intro from "./Components/Intro/intro";
import About from "./Components/About/about";
import Skills from "./Components/Skills/skills";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

