import express from "express";
import { getPosts, getPost, addPost, deletePost, updatePost } from "../controllers/controller_posts.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.get("/", addPost);
router.delete("/:id", deletePost);
router.put("/:id", updatePost);

export default router;