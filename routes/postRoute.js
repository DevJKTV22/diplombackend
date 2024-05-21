import express from "express";
import { checkAuth } from "../validations/checkAuth.js";

import {
    getAllPosts,
    getPostById,
    getPostByIdCategory,
    createPost,
    deletePost,
    updatePost,
    getLastThreePosts,
} from '../controllers/postController.js';

const postrouter = express.Router();

postrouter.get('/last', getLastThreePosts);
postrouter.get('/', getAllPosts);
postrouter.get('/:id', getPostById);
postrouter.get('/category/:id', getPostByIdCategory);

postrouter.post('/', checkAuth, createPost);
postrouter.patch('/:id', checkAuth, updatePost);
postrouter.delete('/:id', checkAuth, deletePost);

export default postrouter;