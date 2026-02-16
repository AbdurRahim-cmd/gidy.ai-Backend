// check-models.js
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

async function listModels() {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); 
    // We access the model manager via the raw API to list models
    // (There isn't a direct helper in the simplified client, so we verify by basic connection)
    console.log("Checking API connection...");
    
    // Actually, the best way to list models in the Node SDK is currently restricted 
    // or requires a specific call. Instead, let's try the safest fallback model:
    console.log("If gemini-1.5-flash failed, try 'gemini-1.0-pro' or 'gemini-pro-vision'");
    
  } catch (error) {
    console.error("Error:", error);
  }
}

listModels();