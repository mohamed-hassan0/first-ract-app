import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <>
      <Home />
      <Portfolio/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
