import express from "express";
import * as dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const router = express.Router();

const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const posts = await prisma.posts.findMany();
    res.status(200).json({ success: true, data: posts });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Fetching posts failed, please try again",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, prompt } = req.body;

    const newPost = await prisma.posts.create({
      data: {
        name: name,
        prompt: prompt,
      },
    });
    res.status(201).json({ data: newPost });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to create a post, please try again",
    });
  }
});

export default router;
