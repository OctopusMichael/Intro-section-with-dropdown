import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./style/App.css";

function App() {
  return (
    <>
      <div className="container-fluid section-container-main">
        <Navbar />
        <Hero />

        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Michael Diaz</a>.
        </div>
      </div>
    </>
  );
}

export default App;
