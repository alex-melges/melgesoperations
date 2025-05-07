import React from "react";
import {
  UserCog,
  Target,
  Briefcase,
  Brain,
  LineChart,
  Layers,
  Lightbulb,
  GraduationCap,
  Calculator,
  MessageSquare,
  BarChart2,
  Settings,
  Activity,
} from "lucide-react";

function Profissional() {
  return (
    <main className="px-6 py-10 max-w-5xl mx-auto text-gray-800">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold">Alex Profissional</h1>
      </header>

      {/* Introdução */}
      <section className="mb-12">
        <hgroup className="flex items-center gap-2 mb-4">
          <UserCog className="text-indigo-600" />
          <h2 className="text-2xl font-semibold">Introdução</h2>
        </hgroup>
        <article className="space-y-4">
          <p>
            Sou Doutor em Matemática com sólida atuação em gestão de produtos, projetos e dados em empresas de tecnologia, principalmente no setor financeiro. Nos últimos anos, assumi cargos que exigem pensamento analítico, liderança técnica, visão estratégica e entrega contínua de valor. Tenho experiência com desenvolvimento de produtos digitais, melhoria de processos, análise de dados e construção de soluções orientadas por tecnologia.
          </p>
          <p>
            Estou em transição para atuar de forma mais direta com Ciência de Dados e Inteligência Artificial. Para isso, venho combinando minha base matemática com especializações em dados e experiência prática em projetos que envolvem automação, integração de sistemas, análise de métricas e uso de dados para tomada de decisão. Acredito que meu diferencial está em integrar a visão técnica e a de negócios, sempre com foco em impacto real.
          </p>
        </article>
      </section>

      {/* Objetivo de Carreira */}
      <section className="mb-12">
        <hgroup className="flex items-center gap-2 mb-4">
          <Target className="text-rose-600" />
          <h2 className="text-2xl font-semibold">Objetivo de Carreira e Visão Profissional</h2>
        </hgroup>
        <article className="space-y-4">
          <p>
            Minha meta é consolidar uma atuação como especialista técnico na interseção entre Ciência de Dados, Inteligência Artificial e excelência operacional — não pela ascensão hierárquica, mas pelo acúmulo de repertório e entregas em projetos multidisciplinares e complexos.
          </p>
          <p>
            Com base na minha formação sólida em matemática e experiência prática com gestão de produtos, processos e stakeholders, quero evoluir para resolver problemas técnicos com profundidade, mas sem perder o foco no valor gerado ao negócio. Acredito que minha capacidade de transitar entre equipes, áreas e linguagens (técnicas e humanas) me torna um elo entre a estratégia e a execução.
          </p>
          <p>
            Não busco ser um gestor de pessoas ou subir na hierarquia tradicional — busco ser uma referência técnica, que atua com autonomia, responsabilidade e visão de ponta a ponta em soluções orientadas por dados e IA. A combinação entre visão analítica, habilidade de comunicação e pensamento sistêmico é a base da minha atuação.
          </p>
        </article>
      </section>

      {/* Experiências */}
      <section className="mb-12">
        <hgroup className="flex items-center gap-2 mb-4">
          <Briefcase className="text-yellow-600" />
          <h2 className="text-2xl font-semibold">Síntese de Experiências e Aprendizados</h2>
        </hgroup>
        <article className="space-y-4">
          <p>
            Minha trajetória começou na academia, com quase uma década dedicada à pesquisa em matemática pura. Essa base desenvolveu minha capacidade analítica, rigor lógico e pensamento abstrato — habilidades fundamentais para atuar com dados e inteligência artificial.
          </p>
          <p>
            Ao migrar para o mercado, atuei por quatro anos no setor de tecnologia bancária, passando por posições como Analista de Produtos, Product Owner e Product Manager. Nesse período:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>Aprimorei minha habilidade de traduzir necessidades de negócio em requisitos técnicos.</li>
            <li>Liderei iniciativas baseadas em metodologias ágeis, como Scrum e Kanban.</li>
            <li>Atuei em frentes de melhoria contínua, aplicando Lean Six Sigma e a metodologia DMAIC para identificar gargalos, reduzir desperdícios e otimizar fluxos.</li>
          </ul>
          <p>
            Minha atuação sempre foi marcada por uma visão sistêmica: entender não apenas “o que” fazer, mas “por que” fazer e “como” entregar soluções que geram valor real. Essa combinação entre pensamento crítico, gestão e foco em dados preparou o terreno para minha transição atual.
          </p>
          <p>
            Atualmente, estou cursando um MBA em Análise e Ciência de Dados, com foco em estatística, visualização, machine learning, modelagem e programação (Python, SQL). Essa formação está me permitindo estruturar o conhecimento técnico necessário para atuar como especialista em projetos que envolvem dados e IA, somando à bagagem prática que já possuo.
          </p>
        </article>
      </section>

      {/* Diferenciais Técnicos */}
      <section className="mb-12">
        <hgroup className="flex items-center gap-2 mb-4">
          <Brain className="text-purple-600" />
          <h2 className="text-2xl font-semibold">Diferenciais Técnicos em Dados e IA</h2>
        </hgroup>
        <article className="space-y-6">
          <p>
            O que me destaca na área de dados e inteligência artificial não é apenas o domínio técnico — é a capacidade de integrar análise profunda, visão de produto e gestão de valor para resolver problemas reais de forma pragmática.
          </p>
          <div>
            <h3 className="text-xl font-medium flex items-center gap-2">
              <Calculator className="text-blue-600" size={20} />
              Capacidade Analítica com Fundamento Matemático
            </h3>
            <p>
              Minha formação avançada em Matemática me permite entender profundamente os modelos estatísticos e algorítmicos por trás de soluções em IA, indo além da aplicação “caixa-preta”. Isso me dá segurança para explicar, ajustar e defender escolhas técnicas em contextos críticos.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium flex items-center gap-2">
              <LineChart className="text-green-600" size={20} />
              Pensamento Orientado a Valor
            </h3>
            <p>
              Não vejo dados como números soltos: vejo como informações conectadas ao negócio. Minha vivência com gestão de produtos e projetos me ensinou a olhar para dados com propósito: gerar eficiência, tomar decisões melhores e criar soluções aplicáveis, que não ficam no papel.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium flex items-center gap-2">
              <MessageSquare className="text-orange-600" size={20} />
              Comunicação Estratégica e Técnica
            </h3>
            <p>
              Tenho facilidade em dialogar com diferentes públicos — técnicos, executivos ou operacionais — adaptando minha linguagem e extraindo o melhor de cada interação. Essa escuta ativa me permite entender dores reais, transformar conversas em dados e aplicar soluções. Encaro esse processo como o meu “gemba” (chão de fábrica) pessoal.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium flex items-center gap-2">
              <Layers className="text-teal-600" size={20} />
              Especialização com Amplitude
            </h3>
            <p>
              Estou trilhando um caminho de especialização técnica, mas sem perder a visão ampla. Busco atuar como um elo entre áreas técnicas e de negócio, com foco em projetos multidisciplinares e cada vez mais complexos, sem depender de cargos hierárquicos para crescer. Quero ser referência pela qualidade técnica e visão estratégica que entrego.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium flex items-center gap-2">
              <Lightbulb className="text-yellow-500" size={20} />
              Mentalidade de Melhoria Contínua
            </h3>
            <p>
              A filosofia Lean Six Sigma está enraizada na minha forma de pensar: sempre há um jeito melhor de fazer. E os dados mostram esse caminho. Por isso, integro IA, estatística e análise com frameworks de melhoria contínua para impulsionar resultados.
            </p>
          </div>
        </article>
      </section>

      {/* Formação Técnica */}
      <section className="mb-12">
        <hgroup className="flex items-center gap-2 mb-4">
          <GraduationCap className="text-indigo-600" />
          <h2 className="text-2xl font-semibold">Formação Técnica e Habilidades Analíticas</h2>
        </hgroup>
        <ul className="list-disc list-inside pl-4 space-y-2">
          <li><strong>Formação analítica de base forte:</strong> Doutor em Matemática com ênfase em geometria, topologia e classes características; domínio estatístico e lógica matemática para modelagem de dados.</li>
          <li><strong>MBA em Ciência de Dados (em andamento):</strong> Python, SQL, modelos estatísticos, visualização de dados, machine learning supervisionado e não supervisionado, séries temporais e modelagem preditiva.</li>
          <li><strong>Excelência em comunicação técnica:</strong> Habilidade em transformar conversas com stakeholders em hipóteses, requisitos e análises estruturadas. Trago a filosofia do gemba do Six Sigma para o mundo dos dados: ir à fonte do problema e observá-lo de perto.</li>
          <li><strong>Conhecimento de produto e ciclo de vida:</strong> Experiência como Product Owner e Product Manager me permite entender desde a ideação até a entrega e sustentação de soluções digitais baseadas em dados.</li>
          <li><strong>Visão de processos e melhoria contínua:</strong> Certificado Lean Six Sigma Green Belt, com foco na metodologia DMAIC para otimização de sistemas e operações.</li>
        </ul>
      </section>

      {/* Transição para Dados e IA */}
      <section className="mb-12">
        <hgroup className="flex items-center gap-2 mb-4">
          <Activity className="text-pink-600" />
          <h2 className="text-2xl font-semibold">Transição para Dados e Inteligência Artificial</h2>
        </hgroup>
        <article className="space-y-4">
          <p>
            Minha formação matemática sempre foi orientada à resolução de problemas complexos e ao pensamento lógico. Ao longo da minha carreira em tecnologia e produtos, percebi que as decisões mais estratégicas e os projetos mais impactantes eram aqueles guiados por dados confiáveis, bem tratados e analisados com contexto. Foi aí que nasceu meu interesse — e compromisso — com a transição para a área de Dados e IA.
          </p>
          <p>
            Hoje, essa transição já está em curso. Estou aprofundando meus conhecimentos em estatística, Python, SQL, modelos de regressão, clusterização e análise de séries temporais no MBA em Ciência de Dados. Paralelamente, aplico esse conhecimento na prática por meio de projetos e publicações, explorando temas como análise de dados, visualização, automação e o uso de IA na melhoria de processos.
          </p>
          <p>
            Vejo a Ciência de Dados como uma ponte entre minha trajetória analítica, minha experiência de produto e minha vocação por resolver problemas reais com impacto. Estou pronto para atuar em desafios onde dados e tecnologia sejam o motor das decisões — seja como Cientista de Dados, Product Manager orientado por dados ou Analista Sênior com foco técnico e estratégico.
          </p>
        </article>
      </section>
    </main>
  );
}

export default Profissional;
