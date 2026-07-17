import { BrowserRouter, Routes, Route } from "react-router-dom";
import JoinTeamPage from "./pages/JoinTeamPage";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/trabaja-con-nosotros" element={<JoinTeamPage />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;