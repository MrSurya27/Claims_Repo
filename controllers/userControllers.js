const asyncHandler = require("express-async-handler")

//@desc get all contacts
//@route GET /api/users
//@access public
const getUsers = asyncHandler(async (req,res) => {
    res.status(200).json({message:"Get all users."});
});

//@desc create New contacts
//@route POST /api/users
//@access public

const getUser = asyncHandler(async (req,res) => {
    res.status(200).json({message:`Get user with id: ${req.params.id}`});
});

//@desc get user with ID
//@route GET /api/users
//@access public

const createUser = asyncHandler(async (req,res) => {
    console.log("The request body is :",req.body);

    const {name,email,age,pass} = req.body;
    if(!name || !email || !age || !pass) {
        res.status(400);
        throw new Error("All fields are madatory.")
    }

    res.status(201).json({message:"Create user."});
});

//@desc get all contacts
//@route GET /api/users
//@access public

const updateUser = asyncHandler(async (req,res) => {
    res.status(201).json({message:`Update user with for ${req.params.id}`});
});

const deleteUser = asyncHandler(async (req,res) => {
    res.status(201).json({message:`Delete user with id: ${req.params.id}`});
});

module.exports = {getUsers,getUser,createUser,updateUser,deleteUser};