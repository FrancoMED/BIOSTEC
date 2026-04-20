import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Screen from "./pages/Screen/Screen.jsx";
import ButtonFloat from "./components/ButtonFloat/ButtonFloat.jsx";
import Header from "./components/Header/Header.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Keyboard from "./pages/Keyboard/Keyboard.jsx";
import Hinges from "./pages/Hinges/Hinges.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/screen" element={<Screen />} />
      </Routes>
      <Routes>
        <Route path="/keyboard" element={<Keyboard />} />
      </Routes>
      <Routes>
        <Route path="/hinges" element={<Hinges />} />
      </Routes>
      <Footer />
      <ButtonFloat />
    </div>
  );
}

export default App;
