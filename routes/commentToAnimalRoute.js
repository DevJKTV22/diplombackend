import express from "express";
import { checkAuth } from "../validations/checkAuth.js";

import {
    getAllComments,
    getCommentById,
    getCommentsByAnimalId,

    createComment,
    updateComment,
    deleteComment,
    
} from '../controllers/animalCommentController.js';

const postrouter = express.Router();


postrouter.get('/', getAllComments);
postrouter.get('/:id', getCommentById);
postrouter.get('/animal/:id', getCommentsByAnimalId);



postrouter.post('/',createComment);
postrouter.patch('/:id', checkAuth, updateComment);
postrouter.delete('/:id', checkAuth, deleteComment);

export default postrouter;