import express from "express";
import { checkAuth } from "../validations/checkAuth.js";

import {
    getAllAnimals,
    getAnimalById,
    getLastAnimals,

    createAnimal,
    updateAnimal,
    deleteAnimal,
    
} from '../controllers/animalController.js';

const postrouter = express.Router();

postrouter.get('/last', getLastAnimals);
postrouter.get('/', getAllAnimals);
postrouter.get('/:id', getAnimalById);



postrouter.post('/', createAnimal);
postrouter.patch('/:id', checkAuth, updateAnimal);
postrouter.delete('/:id', checkAuth, deleteAnimal);

export default postrouter;