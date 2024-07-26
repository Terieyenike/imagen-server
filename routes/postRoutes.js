import express from "express";
import * as dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

const router = express.Router();

const prisma = new PrismaClient();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

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
    const { name, prompt, photo } = req.body;
    const photoUrl = await cloudinary.uploader.upload(photo);

    const newPost = await prisma.posts.create({
      data: {
        name: name,
        prompt: prompt,
        photo: photoUrl.url,
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
