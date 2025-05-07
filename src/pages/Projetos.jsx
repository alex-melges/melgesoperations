import React from "react";
import { Briefcase, Code, Globe } from "lucide-react";

function Projetos() {
  return (
    <section className="px-6 py-10 max-w-5xl mx-auto text-gray-800 space-y-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold flex items-center justify-center gap-2">
          🧩 Projetos Técnicos como Marcos da Evolução Profissional
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
          Cada etapa da minha carreira foi marcada por um projeto de alto impacto, que exigiu competências técnicas,
          colaboração entre áreas e foco em resultados. Esses projetos representam marcos da minha evolução profissional —
          desde a atuação como analista até a liderança de iniciativas estratégicas de produto.
        </p>
      </header>

      <article className="space-y-4 border-l-4 border-blue-500 pl-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Code className="w-6 h-6 text-blue-500" /> Integração de Plataforma com a API da Anbima
        </h2>
        <p>
          Na <strong>LUZ Soluções Financeiras</strong>, como <strong>Analista Júnior de Produtos</strong>,
          participei de um projeto essencial: a integração do sistema <strong>MITRA</strong> com a nova
          <strong> API da Anbima</strong>. A empresa já consumia dados sobre fundos de investimento, mas de maneira
          manual e ineficiente. Com o lançamento da API oficial, surgiu a oportunidade de automatizar a captura
          e o tratamento de dados de mais de 10 mil fundos ativos no Brasil.
        </p>
        <p>
          Junto a uma equipe de desenvolvedores e analistas, desenhamos e implementamos uma ferramenta robusta que
          capturava mais de <strong>40 informações diárias por fundo</strong>. O sistema foi integrado ao MITRA e passou
          a fornecer essas informações em tempo real aos clientes, transformando um processo moroso em uma
          <strong> solução confiável e automatizada</strong>. Essa entrega demonstrou meu potencial para atuar na
          <strong> interface entre dados, negócio e tecnologia</strong>.
        </p>
      </article>

      <article className="space-y-4 border-l-4 border-green-500 pl-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Briefcase className="w-6 h-6 text-green-500" /> Estruturação do Processo de Releases Técnicos
        </h2>
        <p>
          Como <strong>Gestor de QA</strong>, fui responsável por reestruturar todo o processo de releases da empresa —
          que até então era informal, pouco documentado e causava atrasos e retrabalho. Estruturei um fluxo claro para
          dois tipos de releases: os <strong>mensais</strong>, com entregas contínuas de código, e os
          <strong> semestrais</strong>, focados em atualizações de banco de dados.
        </p>
        <p>
          Criei cronogramas de homologação, alinhei sprints com áreas de negócio, defini responsáveis por merges e testes,
          e simulei ambientes reais de clientes. Também atuei com stakeholders de múltiplas áreas: Projetos, CX, P&D, TI,
          DBA, Marketing e Comercial. O resultado foi um processo
          <strong> mais confiável, previsível e alinhado com as demandas do negócio</strong>.
        </p>
      </article>

      <article className="space-y-4 border-l-4 border-purple-500 pl-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Globe className="w-6 h-6 text-purple-500" /> Expansão da Plataforma MITRA para América do Sul
        </h2>
        <p>
          Na minha última posição na LUZ, como <strong>Product Manager</strong>, liderei um dos projetos mais estratégicos
          da empresa: a <strong>expansão da plataforma MITRA para o mercado sul-americano</strong>, com foco inicial na
          <strong> Colômbia</strong>. A operação anterior funcionava com adaptações do sistema brasileiro.
        </p>
        <p>
          Com a chegada de um novo cliente, criamos uma <strong>versão LATAM</strong> do sistema, aderente à regulamentação
          local. Modelei processos, estudei a legislação e coordenei entregas com os times técnicos, sempre em diálogo com
          o <strong>Banco Central Colombiano</strong>. Essa experiência fortaleceu meu olhar para a
          <strong> criação de soluções escaláveis e regulatoriamente aderentes</strong>.
        </p>
      </article>
    </section>
  );
}

export default Projetos;
