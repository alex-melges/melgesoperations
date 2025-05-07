import React from "react";
import { BookOpen, Brain, Heart, Activity } from "lucide-react";

function Pessoal() {
  return (
    <section className="px-6 py-10 max-w-3xl mx-auto text-gray-800">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Pessoal</h1>
      </header>

      <article className="mb-10">
        <p className="mb-4">
          Sou movido por curiosidade, propósito e uma vontade genuína de construir algo relevante com o que sei. 
          Fora do universo dos dados, sou alguém que valoriza relações profundas, aprendizados constantes e momentos simples — daqueles que não cabem em planilhas.
        </p>
      </article>

      <article className="mb-10 flex items-start gap-4">
        <BookOpen className="text-blue-600 mt-1" size={28} />
        <div>
          <p className="mb-2">
            <strong>Leitura e escrita como expansão:</strong> filosofia, ficção científica e ensaios sobre o futuro são temas que sempre me atraem.
          </p>
          <p>
            Também cultivo o hábito da escrita, tanto como expressão quanto como ferramenta de organização mental.
          </p>
        </div>
      </article>

      <article className="mb-10 flex items-start gap-4">
        <Brain className="text-purple-600 mt-1" size={28} />
        <div>
          <p className="mb-2">
            <strong>Saúde mental e física como base:</strong> aplico o mesmo rigor do trabalho ao cuidado pessoal. Acredito que bem-estar é fundamento — não luxo — para produtividade sustentável e decisões mais lúcidas.
          </p>
          <p>
            Encaro a rotina como um sistema integrado: corpo em movimento, mente em equilíbrio.
          </p>
        </div>
      </article>

      <article className="mb-10 flex items-start gap-4">
        <Activity className="text-green-600 mt-1" size={28} />
        <div>
          <p className="mb-2">
            <strong>Corrida de rua como prática e metáfora:</strong> mais do que esporte, é um símbolo pessoal de progresso, constância e superação.
          </p>
          <p className="mb-2">
            Cada quilômetro percorrido é um lembrete de que resiliência se constrói passo a passo — e que os resultados vêm quando se respeita o processo.
          </p>
          <p>
            É no asfalto, com os fones de ouvido e o ritmo dos passos, que reorganizo pensamentos, conecto ideias e volto mais inteiro para as responsabilidades do dia.
          </p>
        </div>
      </article>
    </section>
  );
}

export default Pessoal;
