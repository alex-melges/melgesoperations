import React from "react";
import { GraduationCap, BookOpenCheck, Landmark } from "lucide-react";

function Academico() {
  return (
    <section className="px-6 py-10 max-w-3xl mx-auto text-gray-800">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Acadêmico</h1>
      </header>

      <article className="mb-10 flex items-start gap-4">
        <GraduationCap className="text-indigo-600 mt-1" size={28} />
        <div>
          <p className="mb-2">
            Durante o Doutorado em Matemática, sob supervisão do Prof. Dr. Edivaldo Lopes dos Santos (Departamento de Matemática, UFSCar - São Carlos), atuei em diversas frentes acadêmicas.
          </p>
          <ul className="list-disc list-inside pl-2">
            <li>Estágio de docência e professor voluntário na graduação;</li>
            <li>Ministrei a disciplina optativa <strong>Introdução à Topologia</strong>;</li>
            <li>Atuei como monitor de <strong>Geometria Algébrica</strong>;</li>
            <li>Fui representante discente da pós-graduação no PPGM-UFSCar por 3 anos.</li>
          </ul>
        </div>
      </article>

      <article className="mb-10 flex items-start gap-4">
        <BookOpenCheck className="text-rose-600 mt-1" size={28} />
        <div>
          <p className="mb-2">
            Minha tese revitalizou uma linha de pesquisa sobre fibrados e classes características (Wu, Stiefel-Whitney e Euler) para variedades topológicas — que estava estagnada desde a década de 1960.
          </p>
          <p className="mb-2">
            O ponto culminante da pesquisa foi a demonstração de um problema em aberto desde o início dos anos 1990, relacionado à <strong>validação da Fórmula de Wu para variedades generalizadas</strong>.
          </p>
          <p>
            Essa conquista foi possível a partir de uma <strong>teoria original de fibrados</strong> e da <strong>definição independente de estruturas geométricas para classes de Stiefel-Whitney</strong>, consolidando um texto de referência na área.
          </p>
        </div>
      </article>
    </section>
  );
}

export default Academico;
