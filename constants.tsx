
import { Category, BlogPost } from './types';

// System instruction for the Gemini AI assistant
export const AI_SYSTEM_INSTRUCTION = `Eres un asistente experto en producción cinematográfica y audiovisual de CineFlow. 
Tu objetivo es ayudar a cineastas, fotógrafos, editores y creadores de contenido con consejos técnicos, 
configuraciones de cámara, esquemas de iluminación, y flujos de trabajo de post-producción. 
Responde de manera profesional, inspiradora y técnica cuando sea necesario. 
Si no sabes algo, admítelo y sugiere dónde podrían investigar más.`;

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Dominando la Iluminación de Tres Puntos en 2024',
    excerpt: 'La técnica clásica que todo director de fotografía debe dominar, ahora aplicada a nuevos sensores digitales.',
    content: 'La iluminación de tres puntos es el cimiento de la cinematografía profesional. Consiste en la luz principal (Key Light), la luz de relleno (Fill Light) y la luz de contra (Back Light)...',
    author: 'Elena Cámara',
    date: '15 de Mayo, 2024',
    category: Category.PRODUCTION,
    imageUrl: 'https://images.unsplash.com/photo-1492691523567-69b009945a0b?auto=format&fit=crop&w=800&q=80',
    readTime: '6 min'
  },
  {
    id: '2',
    title: 'IA Generativa: ¿Amenaza o Aliada del Montador?',
    excerpt: 'Exploramos cómo las nuevas herramientas de IA están transformando el flujo de trabajo en Premiere y Resolve.',
    content: 'El montaje audiovisual está viviendo una revolución silenciosa. Desde el recorte automático de silencios hasta la generación de b-roll...',
    author: 'Marcos Corte',
    date: '12 de Mayo, 2024',
    category: Category.AI,
    imageUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
    readTime: '8 min'
  },
  {
    id: '3',
    title: 'Guía de Compresión: H.264 vs ProRes en 2024',
    excerpt: 'Cuándo priorizar la calidad de imagen sobre el espacio de almacenamiento en tus exportaciones finales.',
    content: 'Entender los codecs es vital para cualquier post-productor. Mientras H.264 es el rey de la distribución, ProRes domina el flujo intermedio...',
    author: 'Sofía Codec',
    date: '10 de Mayo, 2024',
    category: Category.POST_PRODUCTION,
    imageUrl: 'https://images.unsplash.com/photo-1535016120720-40c646bebbbb?auto=format&fit=crop&w=800&q=80',
    readTime: '5 min'
  },
  {
    id: '4',
    title: 'Cómo Presupuestar tu Primer Cortometraje',
    excerpt: 'Evita los errores financieros comunes y asegura que cada euro llegue a la pantalla.',
    content: 'El dinero es el combustible del cine. Aprender a gestionar una hoja de cálculo es tan importante como saber encuadrar...',
    author: 'David Productor',
    date: '08 de Mayo, 2024',
    category: Category.PRE_PRODUCTION,
    imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80',
    readTime: '10 min'
  }
];
