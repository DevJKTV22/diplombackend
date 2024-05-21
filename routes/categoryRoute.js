import express from 'express';
import { checkAuth } from '../validations/checkAuth.js';
import {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
} from '../controllers/categoryController.js';

const categoryrouter = express.Router();

categoryrouter.get('/', getAllCategories);
categoryrouter.get('/:id', getCategoryById);

categoryrouter.post('/create', checkAuth, createCategory);
categoryrouter.patch('/:id', checkAuth, updateCategory);
categoryrouter.delete('/:id', checkAuth, deleteCategory);

export default categoryrouter;