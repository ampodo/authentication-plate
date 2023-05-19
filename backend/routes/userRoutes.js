import express from 'express';
const router = express.Router();
import {authUser,
       registerUser, 
       loggedoutUser, 
       getUserProfile,
       updateUserProfile,
} from  '../controllers/userController.js';



router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', loggedoutUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile);


export default router;
