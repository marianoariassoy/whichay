import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Obras from "./pages/obras/Obras";
import Novedades from "./pages/novedades/Novedades";
import Error from "./pages/error/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home target="home" />} />
        <Route path="/obras/:id" element={<Obras />} />
        <Route path="/novedades/:id" element={<Novedades />} />
        <Route path="/somos-wichay" element={<Home target="about" />} />
        <Route path="/servicios" element={<Home target="services" />} />
        <Route path="/obras" element={<Home target="works" />} />
        <Route path="/sustentabilidad" element={<Home target="sustentability" />} />
        <Route path="/novedades" element={<Home target="news" />} />
        <Route path="/multimedia" element={<Home target="multimedia" />} />
        <Route path="/contacto" element={<Home target="contact" />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
