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
import Ports from "./pages/Ports/Ports.jsx";
import Start from "./pages/Start/Start.jsx";
import Liquid from "./pages/Liquid/Liquid.jsx";
import Overheating from "./pages/Overheating/Overheating.jsx";
import Discs from "./pages/Discs/Discs.jsx";
import Ram from "./pages/Ram/Ram.jsx";
import Windows from "./pages/Windows/Windows.jsx";
// import Drivers from "./pages/Drivers/Drivers.jsx";

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
      <Routes>
        <Route path="/ports" element={<Ports />} />
      </Routes>
      <Routes>
        <Route path="/start" element={<Start />} />
      </Routes>
      <Routes>
        <Route path="/liquid" element={<Liquid />} />
      </Routes>
      <Routes>
        <Route path="/overheating" element={<Overheating />} />
      </Routes>
      <Routes>
        <Route path="/discs" element={<Discs />} />
      </Routes>
      <Routes>
        <Route path="/ram" element={<Ram />} />
      </Routes>
      <Routes>
        <Route path="/windows" element={<Windows />} />
      </Routes>
      {/* <Routes> */}
      {/* <Route path="/drivers" element={<Drivers />} /> */}
      {/* </Routes> */}
      <Footer />
      <ButtonFloat />
    </div>
  );
}

export default App;
