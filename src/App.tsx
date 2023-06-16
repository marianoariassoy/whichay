import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Obras from "./pages/obras/Obras";
import Novedades from "./pages/novedades/Novedades";
import Error from "./pages/error/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/obras/:id" element={<Obras />} />
        <Route path="/novedades/:id" element={<Novedades />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
