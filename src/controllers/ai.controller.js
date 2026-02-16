import { generateProfileSummary } from "../services/gemini.service.js";

export const generateAiBio = async (req, res) => {
  try {

    const profile = req.body;

    if (!profile) {
      return res.status(400).json({
        success: false,
        message: "Profile data required",
      });
    }

    const summary = await generateProfileSummary(profile);

    return res.status(200).json({
      success: true,
      summary,
    });

  } catch (error) {
    console.error("AI Error:", error);

    return res.status(500).json({
      success: false,
      message: "AI generation failed",
    });
  }
};
