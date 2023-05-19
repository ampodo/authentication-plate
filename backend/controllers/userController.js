
import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import User from '../models/userModel.js'

// POST /api/users/auth
const authUser = asyncHandler(async (req, res) => {
    
    res.status(200).json({message: 'Auth User'});
});


// POST /api/users/
const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password} = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
       res.status(400);
       throw new Error('User already exists');
    }

    const user = await User.create({
         name,
         email,
         password   
    });
     
    if (user) {
      generateToken( res, user._id )
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        });

    } else {
        res.status(400);
        throw new Error('Invalid user data');

    }

});

// POST /api/users/logout
const loggedoutUser = asyncHandler(async (req, res) => {
    
    res.status(200).json({message: 'User logged out'});
});

// GET /api/users/profile // @access Private
const getUserProfile = asyncHandler(async (req, res) => {
    
    res.status(200).json({message: 'User profile'});
});

// PUT /api/users/profile // @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
    
    res.status(200).json({message: 'Profile updated'});
});



export {authUser, 
        registerUser, 
        loggedoutUser, 
        getUserProfile,
        updateUserProfile
    };



