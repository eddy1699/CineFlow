
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  // Added "Asistente IA" to navigation links to provide access to the new feature
  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Asistente IA', path: '/ai-assistant' },
    { name: 'Sobre CineFlow', path: '/about' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 glass border-b border-white/10 px-4 md:px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-pink-600 rounded-lg flex items-center justify-center font-bold text-xl font-syncopate shadow-lg shadow-orange-500/20">
              C
            </div>
            <span className="text-xl font-syncopate font-bold tracking-tighter hidden sm:inline-block">CINEFLOW</span>
          </Link>
          
          <nav className="flex space-x-6 md:space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide hover:text-orange-400 transition-colors ${
                  location.pathname === link.path ? 'text-orange-500' : 'text-zinc-400'
                }`}
              >
                {link.name.toUpperCase()}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full text-xs font-semibold border border-white/10 transition-all">
              NEWSLETTER
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-black border-t border-white/5 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-syncopate font-bold text-lg mb-4">CINEFLOW</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              La plataforma definitiva para creadores audiovisuales. 
              Técnica, arte y tecnología en un solo lugar.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Categorías</h4>
            <ul className="text-zinc-500 text-sm space-y-2">
              <li><Link to="/" className="hover:text-orange-500 transition-colors">Pre-producción</Link></li>
              <li><Link to="/" className="hover:text-orange-500 transition-colors">Producción</Link></li>
              <li><Link to="/" className="hover:text-orange-500 transition-colors">Post-producción</Link></li>
              <li><Link to="/" className="hover:text-orange-500 transition-colors">Equipo Técnico</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-zinc-500 text-sm mb-4">Recibe tips de producción semanales.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Tu email..." 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm flex-grow focus:outline-none focus:border-orange-500"
              />
              <button className="bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-lg text-sm font-bold transition-colors">
                OK
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-zinc-600 text-xs">
          © {new Date().getFullYear()} CineFlow. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
