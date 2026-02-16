import express from "express";
import cors from "cors";
import profileRoutes from "./routes/profile.route.js";
import aiRouter from "./routes/ai.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/profile", profileRoutes);
app.use("/api/ai", aiRouter);

app.get("/", (req, res) => {
  res.send("API Running");
});

app.get("/test", (req, res) => {
  res.send("Test OK");
});

export default app;
