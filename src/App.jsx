import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import QuemSouEu from "./pages/QuemSouEu";
import Profissional from "./pages/QuemSouEu/Profissional";
import Academico from "./pages/QuemSouEu/Academico";
import Pessoa from "./pages/QuemSouEu/Pessoa";
import BlogsPessoais from "./pages/BlogsPessoais";
import Contato from './pages/Contato';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quem-sou-eu" element={<QuemSouEu />} />
        <Route path="/quem-sou-eu/profissional" element={<Profissional />} />
        <Route path="/quem-sou-eu/academico" element={<Academico />} />
        <Route path="/quem-sou-eu/pessoa" element={<Pessoa />} />
        <Route path="/blogs-pessoais" element={<BlogsPessoais />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </>
  );
}

export default App;
