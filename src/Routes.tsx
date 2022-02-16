import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Carrinho from "./pages/Carrinho";
import Catalogo from "./pages/Catalogo";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;