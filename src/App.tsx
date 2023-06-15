import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Multimedia from "./pages/multimedia/Multimedia";
import Obras from "./pages/obras/Obras";
import Novedades from "./pages/novedades/Novedades";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/multimedia" element={<Multimedia />} />
        <Route path="/obras/:id" element={<Obras />} />
        <Route path="/novedades/:id" element={<Novedades />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
