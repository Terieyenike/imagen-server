import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config();

const prisma = new PrismaClient();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello from DALL.E!",
  });
});

app.get("/random-prompt", async (req, res) => {
  try {
    const prompts = await prisma.dalle_prompts.findMany();
    const response = prompts.map((prompt) => prompt.surpriseMePrompts);
    const surpriseMePrompts = await response;
    if (surpriseMePrompts.length === 0) throw new Error("No prompts available");
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];
    res.json({ prompt: randomPrompt });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch prompt" });
  }
});

const startServer = async () => {
  try {
    app.listen(8080, () => console.log("Server started on port 8080"));
  } catch (error) {
    console.log(error);
  }
};

startServer();
