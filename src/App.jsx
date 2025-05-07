// Bibliotecas
import { Routes, Route } from "react-router-dom";

// Componentes globais
import Navbar from "./components/Navbar";

// Páginas principais
import Home from "./pages/Home";
import QuemSouEu from "./pages/QuemSouEu";
import Projetos from "./pages/Projetos";
import BlogsPessoais from "./pages/BlogsPessoais";
import Contato from "./pages/Contato";

// Subpáginas
import Profissional from "./pages/QuemSouEu/Profissional";
import Academico from "./pages/QuemSouEu/Academico";
import Pessoa from "./pages/QuemSouEu/Pessoa";


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
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/blogs-pessoais" element={<BlogsPessoais />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </>
  );
}

export default App;
