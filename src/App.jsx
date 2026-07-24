import { BrowserRouter, Routes, Route } from "react-router-dom";
import JoinTeamPage from "./pages/JoinTeamPage";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import BrandPage from "./pages/BrandPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/trabaja-con-nosotros" element={<JoinTeamPage />} />
        <Route path="/marcas/:brandId" element={<BrandPage />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
