
export enum Category {
  PRE_PRODUCTION = 'Pre-producción',
  PRODUCTION = 'Producción',
  POST_PRODUCTION = 'Post-producción',
  GEAR = 'Equipo',
  INDUSTRY = 'Industria',
  AI = 'IA en Cine'
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: Category;
  imageUrl: string;
  readTime: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
