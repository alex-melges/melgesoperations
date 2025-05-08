import React from "react";
import {
  UserCog,
  BrainCircuit,
  BarChart3,
  Sparkles,
} from "lucide-react";
import logo from "../assets/Logo_Melges_Intelligence.png";

function Home() {
  return (
    <main className="bg-fundo text-cinzaClaro min-h-screen font-sans px-6 py-10">
      {/* Cabeçalho com logo */}
      <header className="mb-12 flex flex-col items-center text-center">
          <center>
            <img src={logo} alt="Logo Melges Intelligence" className="h-12 w-auto mb-4" />
          </center>
        <h1 className="text-4xl font-bold text-brancoPuro">
          Bem-vindos à Melges Intelligence
        </h1>
        <p className="text-lg mt-2 text-azulClaro">
          Consultoria em IA, Dados e Excelência Operacional
        </p>
      </header>

      {/* Seção de Apresentação */}
      <section className="mb-12 max-w-4xl mx-auto">
        <hgroup className="flex items-center gap-2 mb-4 text-azulClaro">
          <UserCog />
        </hgroup>

        <article className="space-y-4 text-justify leading-relaxed">
          <p>
            Prazer, meu nome é Alex Melges Barbosa, sou Doutor em Matemática com sólida atuação em gestão de produtos,
            projetos e dados em empresas de tecnologia, principalmente no setor
            financeiro. Nos últimos anos, assumi cargos que exigem pensamento
            analítico, liderança técnica, visão estratégica e entrega contínua
            de valor.
          </p>
          <p>
            Tenho experiência com desenvolvimento de produtos digitais,
            melhoria de processos, análise de dados e construção de soluções
            orientadas por tecnologia.
          </p>
          <p>
            Estou em transição para atuar de forma mais direta com Ciência de
            Dados e Inteligência Artificial. Para isso, venho combinando minha
            base matemática com especializações em dados e experiência prática
            em projetos que envolvem automação, integração de sistemas, análise
            de métricas e uso de dados para tomada de decisão.
          </p>
          <p>
            Acredito que meu diferencial está em integrar a visão técnica e a
            de negócios, sempre com foco em impacto real.
          </p>
        </article>
      </section>

      {/* Destaques Profissionais */}
      <section className="space-y-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-brancoPuro">
          <Sparkles className="text-azulClaro" />
          Principais Diferenciais
        </h2>

        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <BrainCircuit className="text-azulClaro mt-1" />
            <span>
              <strong>Fundamento técnico sólido:</strong> Especialização em
              matemática aplicada e estatística para construção de soluções com
              IA.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <BarChart3 className="text-azulClaro mt-1" />
            <span>
              <strong>Visão orientada a dados e valor:</strong> Experiência com
              produtos, dados e otimização de processos em ambientes de alta
              complexidade.
            </span>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Home;
