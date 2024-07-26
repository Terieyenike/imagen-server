import express from "express";
import * as dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.get("/", (req, res) => {
  res.send("Hello AI Image Generation App");
});

router.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;

    const aiResponse = await openai.images.generate({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
      model: "dall-e-3",
    });

    const image_url = aiResponse.data[0].url;
    console.log(image_url);
    res.status(200).json({ photo: image_url });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

export default router;
