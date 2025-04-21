import React from 'react';

const Contato = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6">Entre em Contato</h1>
        <p className="mb-4">
          Se quiser trocar uma ideia ou acompanhar meu trabalho, pode me chamar por aqui:
        </p>

        <ul className="space-y-4 text-lg">
          <li>
            📧 <strong>Email:</strong>{' '}
            <a
              href="mailto:melges.ab@gmail.com"
              className="text-blue-600 hover:underline"
            >
              melges.ab@gmail.com
            </a>
          </li>
          <li>
            📱 <strong>Celular:</strong>{' '}
            <a
              href="tel:+5519997230578"
              className="text-blue-600 hover:underline"
            >
              +55 (19) 99723-0578
            </a>
          </li>
          <li>
            💼 <strong>LinkedIn:</strong>{' '}
            <a
              href="https://www.linkedin.com/in/alexmelgesbarbosa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              linkedin.com/in/alexmelgesbarbosa/
            </a>
          </li>
          <li>
            📷 <strong>Instagram:</strong>{' '}
            <a
              href="https://www.instagram.com/alex_melges"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              @alex_melges
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contato;
