export default function BlogsPessoais() {
    const newsletters = [
      {
        title: "Biblioteca do Sucesso",
        image: "https://via.placeholder.com/300x200?text=Biblioteca+do+Sucesso",
        description: "Resenhas sobre livros que transformam carreiras e vidas.",
        link: "https://www.linkedin.com/newsletters/biblioteca-do-sucesso-7275598728336396289/",
      },
      {
        title: "A Arte da Entrega",
        image: "https://via.placeholder.com/300x200?text=A+Arte+da+Entrega",
        description: "Técnicas e experiências para transformar projetos em realidade.",
        link: "https://www.linkedin.com/newsletters/a-arte-da-entrega-7303034421534756865/",
      },
      {
        title: "Mentes Artificiais, Futuros Reais",
        image: "https://via.placeholder.com/300x200?text=Mentes+Artificiais",
        description: "Reflexões e tendências sobre o impacto da IA no nosso futuro.",
        link: "https://www.linkedin.com/newsletters/mentesartificiais-futurosreais-7296151851689779200/",
      },
    ];
  
    return (
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-6 text-center">Blogs Pessoais</h1>
        <p className="mb-8 text-lg text-center max-w-3xl mx-auto">
        Aqui você encontra minhas três newsletters no LinkedIn. Clique para acessar cada uma delas e, se curtir o conteúdo, aproveite para se inscrever direto por lá!
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {newsletters.map((item) => (
            <a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden"
            >
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-sm text-gray-300">{item.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  }
  