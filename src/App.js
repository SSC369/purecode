import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <hr className="line" />
      <Home />
      <hr className="line" />
      <Footer />
    </>
  );
};

export default App;
