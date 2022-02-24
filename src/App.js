import "./styles.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import AllpageRouts from "./Router/AllpageRout";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <AllpageRouts />
      <Footer />
    </div>
  );
}
