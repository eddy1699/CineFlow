
import React, { useState } from 'react';
import { BLOG_POSTS } from '../constants';
import { Category } from '../types';
import BlogCard from '../components/BlogCard';

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'Todos'>('Todos');

  const filteredPosts = selectedCategory === 'Todos' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === selectedCategory);

  const categories = ['Todos', ...Object.values(Category)];

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1920&q=80" 
            alt="Hero background" 
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="text-orange-500 font-syncopate font-bold text-sm tracking-[0.3em] mb-4 block">CREANDO EL FUTURO</span>
          <h1 className="text-5xl md:text-8xl font-syncopate font-bold text-white mb-8 tracking-tighter leading-none">
            LIGHTS. CAMERA. <span className="gradient-text">FLOW.</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Descubre las técnicas, el equipo y la visión necesaria para llevar tus producciones al siguiente nivel profesional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-4 rounded-full transition-all flex items-center justify-center space-x-2">
              <span>EXPLORAR ARTÍCULOS</span>
            </button>
            <button className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 px-8 py-4 rounded-full font-bold transition-all">
              CURSOS ONLINE
            </button>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mt-[-3rem] relative z-20">
        <div className="glass rounded-2xl p-4 flex flex-wrap gap-2 justify-center shadow-2xl">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat as any)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat 
                  ? 'bg-white text-black' 
                  : 'bg-white/5 text-zinc-400 hover:bg-white/10'
              }`}
            >
              {cat.toString().toUpperCase()}
            </button>
          ))}
        </div>
      </section>

      {/* Grid Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mt-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-syncopate font-bold tracking-tight">ARTÍCULOS RECIENTES</h2>
          <div className="h-px flex-grow bg-white/10 mx-8 hidden sm:block"></div>
          <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">{filteredPosts.length} RESULTADOS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <BlogCard 
              key={post.id} 
              post={post} 
              onClick={(id) => console.log('Navigate to', id)} 
            />
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-20 bg-zinc-900/20 rounded-3xl border border-dashed border-white/10">
            <p className="text-zinc-500">No hay artículos en esta categoría todavía.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
