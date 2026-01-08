
import { GoogleGenAI } from "@google/genai";
// Fixed missing export in constants.tsx
import { AI_SYSTEM_INSTRUCTION } from "../constants";

export async function askProductionAssistant(prompt: string) {
  // Creating a new GoogleGenAI instance right before the call as per SDK recommendations
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: AI_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    // Accessing .text property directly instead of calling it as a method
    return response.text || "Lo siento, no pude procesar tu consulta en este momento.";
  } catch (error) {
    console.error("Error calling Gemini:", error);
    return "Ocurrió un error al conectar con el asistente de producción.";
  }
}
