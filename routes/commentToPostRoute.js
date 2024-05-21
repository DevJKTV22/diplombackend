import express from "express";
import { checkAuth } from "../validations/checkAuth.js";

import {
    getAllComments,
    getCommentById,
    getCommentsByNewsId,

    createComment,
    updateComment,
    deleteComment,
    
} from '../controllers/postCommentController.js';

const postrouter = express.Router();


postrouter.get('/', getAllComments);
postrouter.get('/:id', getCommentById);
postrouter.get('/post/:id', getCommentsByNewsId);



postrouter.post('/', createComment);
postrouter.patch('/:id', checkAuth, updateComment);
postrouter.delete('/:id', checkAuth, deleteComment);

export default postrouter;