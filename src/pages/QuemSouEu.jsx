import { Link } from "react-router-dom";

export default function QuemSouEu() {
  const cards = [
    {
      title: "Alex Profissional",
      image: "https://via.placeholder.com/300x200?text=Profissional",
      link: "/quem-sou-eu/profissional",
    },
    {
      title: "Alex Acadêmico",
      image: "https://via.placeholder.com/300x200?text=Acadêmico",
      link: "/quem-sou-eu/academico",
    },
    {
      title: "Alex Pessoa",
      image: "https://via.placeholder.com/300x200?text=Pessoa",
      link: "/quem-sou-eu/pessoa",
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Quem sou eu?</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <Link
            to={card.link}
            key={card.title}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300"
          >
            <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-center">{card.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
