
import React, { useState, useRef, useEffect } from 'react';
import { askProductionAssistant } from '../services/gemini';
import { ChatMessage } from '../types';

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: '¡Hola! Soy tu asistente de producción CineFlow. ¿En qué puedo ayudarte hoy? Puedo ayudarte con configuraciones de cámara, esquemas de iluminación o flujo de trabajo en post-producción.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    const response = await askProductionAssistant(userMessage);
    
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  const suggestions = [
    "¿Cómo iluminar una entrevista documental?",
    "Mejores codecs para YouTube en 2024",
    "Configuración para cámara lenta en Sony A7SIII",
    "Consejos para grabar audio en exteriores"
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 flex flex-col h-[85vh]">
      <div className="mb-8 flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-orange-500 to-pink-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div>
          <h1 className="text-2xl font-bold font-syncopate">CINEFLOW AI</h1>
          <p className="text-zinc-500 text-sm">Tu experto en producción audiovisual personal.</p>
        </div>
      </div>

      <div className="flex-grow flex flex-col lg:flex-row gap-8 overflow-hidden">
        {/* Chat Area */}
        <div className="flex-grow glass rounded-3xl overflow-hidden flex flex-col border border-white/10 shadow-2xl">
          <div 
            ref={scrollRef}
            className="flex-grow p-6 overflow-y-auto space-y-6 scrollbar-thin scrollbar-thumb-zinc-800"
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-5 py-3 text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-orange-600 text-white' 
                    : 'bg-white/5 text-zinc-300 border border-white/5'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 rounded-2xl px-5 py-3 border border-white/5 flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/10 bg-black/20">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Pregunta lo que necesites..."
                className="flex-grow bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-orange-600 hover:bg-orange-700 disabled:opacity-50 px-6 py-3 rounded-xl text-sm font-bold transition-all shadow-lg shadow-orange-500/10"
              >
                ENVIAR
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar suggestions */}
        <div className="hidden lg:block w-72 space-y-6">
          <div className="glass rounded-2xl p-6 border border-white/5">
            <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Sugerencias</h3>
            <div className="space-y-3">
              {suggestions.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setInput(s)}
                  className="w-full text-left p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-xs text-zinc-300 transition-all hover:border-orange-500/30"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          
          <div className="glass rounded-2xl p-6 border border-white/5">
            <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Capacidades</h3>
            <ul className="text-[10px] space-y-2 text-zinc-400">
              <li className="flex items-start space-x-2">
                <span className="text-orange-500">•</span>
                <span>Configuración técnica de cámaras</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-500">•</span>
                <span>Análisis de flujos de post-producción</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-500">•</span>
                <span>Diseño de iluminación cinematográfica</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
