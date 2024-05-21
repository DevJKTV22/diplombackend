import express from "express";
import { checkAuth } from "../validations/checkAuth.js";

import {
    getAllDonations,
    getDonationById,
    

    createDonation,
    updateDonationById,
    deleteDonationById,
    
} from '../controllers/donationController.js';

const postrouter = express.Router();


postrouter.get('/', getAllDonations);
postrouter.get('/:id', getDonationById);



postrouter.post('/', createDonation);
postrouter.patch('/:id', checkAuth, updateDonationById);
postrouter.delete('/:id', checkAuth, deleteDonationById);

export default postrouter;