
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
// Adding missing import for AIAssistant page
import AIAssistant from './pages/AIAssistant';

const About = () => (
  <div className="max-w-3xl mx-auto px-4 py-20 text-center">
    <h1 className="text-4xl font-syncopate font-bold mb-8">Sobre CineFlow</h1>
    <p className="text-zinc-400 leading-relaxed mb-6">
      CineFlow nació de la necesidad de centralizar el conocimiento de la industria audiovisual 
      en la era digital. No somos solo un blog, somos un hub de recursos para directores, 
      operadores de cámara y editores que buscan la excelencia.
    </p>
    <p className="text-zinc-400 leading-relaxed mb-12">
      Nuestro equipo está formado por profesionales en activo que comparten sus experiencias 
      reales en set y en la suite de post-producción.
    </p>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {[
        { val: '10K+', label: 'Lectores' },
        { val: '500+', label: 'Artículos' },
        { val: '1.2K', label: 'Comunidad' },
        { val: '15+', label: 'Países' }
      ].map((stat, i) => (
        <div key={i}>
          <div className="text-2xl font-bold text-orange-500">{stat.val}</div>
          <div className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold">{stat.label}</div>
        </div>
      ))}
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Defined the route for the AI Assistant page */}
          <Route path="/ai-assistant" element={<AIAssistant />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
