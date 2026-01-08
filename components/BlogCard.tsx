
import React from 'react';
import { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
  onClick: (id: string) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, onClick }) => {
  return (
    <div 
      className="group cursor-pointer bg-zinc-900/40 rounded-2xl overflow-hidden border border-white/5 hover:border-orange-500/50 transition-all duration-300 flex flex-col h-full"
      onClick={() => onClick(post.id)}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={post.imageUrl} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-black/60 backdrop-blur-md text-[10px] font-bold text-white px-3 py-1 rounded-full border border-white/10 tracking-widest uppercase">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-[10px] text-zinc-500 font-medium mb-3 space-x-3">
          <span>{post.date}</span>
          <span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
          <span>{post.readTime} DE LECTURA</span>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors leading-tight">
          {post.title}
        </h3>
        
        <p className="text-zinc-400 text-sm line-clamp-2 mb-6 leading-relaxed">
          {post.excerpt}
        </p>
        
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full bg-zinc-700 flex items-center justify-center text-[10px] text-white">
              {post.author[0]}
            </div>
            <span className="text-xs text-zinc-300 font-medium">{post.author}</span>
          </div>
          <span className="text-orange-500 text-xs font-bold group-hover:translate-x-1 transition-transform inline-flex items-center">
            LEER MÁS <span className="ml-1">→</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
