import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()
  const currentPath = location.pathname

  const linkClass = (path) =>
    `px-4 py-2 rounded hover:bg-blue-700 transition ${
      currentPath === path ? 'bg-blue-800 text-white' : 'text-white'
    }`

  return (
    <nav className="bg-blue-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Melges Intelligence</h1>
        <div className="space-x-2">
          <Link to="/" className={linkClass('/')}>Home</Link>
          <Link to="/quem-sou-eu" className={linkClass('/quem-sou-eu')}>Quem sou eu?</Link>
          <Link to="/projetos" className={linkClass('/projetos')}>Projetos</Link>
          <Link to="/blogs-pessoais" className={linkClass('/blogs-pessoais')}>Blogs Pessoais</Link>
          <Link to="/contato" className={linkClass('/contato')}>Contato</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
