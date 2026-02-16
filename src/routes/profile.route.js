import express from "express"

import {
  createOrUpdateProfile,
  getProfile
} from "../controllers/profile.controller.js";


const profileRoutes = express.Router();

profileRoutes.post("/", createOrUpdateProfile);

profileRoutes.get("/", getProfile);

export default profileRoutes;
