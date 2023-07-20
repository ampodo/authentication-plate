import express from 'express';
const router = express.Router();
import {authUser,
       registerUser, 
       loggedoutUser, 
       getUserProfile,
       updateUserProfile,
} from  '../controllers/userController.js';
import { protect } from "../middleware/authMiddleware.js";


router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', loggedoutUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);


export default router;
