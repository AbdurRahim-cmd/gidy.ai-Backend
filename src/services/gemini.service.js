import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv"
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function generateProfileSummary(profile) {
  // CHANGED: Updated model name from "gemini-pro" to "gemini-1.5-flash"
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash", 
    generationConfig: {
      maxOutputTokens: 200,    
      temperature: 0.3,         
      topP: 0.8,           
    },
  });

  const prompt = `
  Generate a strictly factual professional LinkedIn bio 
  under 120 words.

  Only use the information provided below.
  Do NOT add assumptions.
  Do NOT invent experience.

  Name: ${profile.name}
  Skills: ${profile.skills?.join(", ") || "Not provided"}
  Experience: ${profile.experience?.map(e => e.title).join(", ") || "Not provided"}
  Education: ${profile.education?.map(e => e.degree).join(", ") || "Not provided"}
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error generating content:", error);
    throw new Error("Failed to generate profile summary.");
  }
}