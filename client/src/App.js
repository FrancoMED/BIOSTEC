import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Screen from "./pages/Screen/Screen.jsx";
import ButtonFloat from "./components/ButtonFloat/ButtonFloat.jsx";
import Header from "./components/Header/Header.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ButtonFloat />
      <Header />
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/screen" element={<Screen />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
