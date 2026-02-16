import express from "express";
import { generateAiBio } from "../controllers/ai.controller.js";

const aiRouter = express.Router();

aiRouter.post("/generate-summary", generateAiBio);

export default aiRouter;
