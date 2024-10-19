import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import Home from "./component/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
