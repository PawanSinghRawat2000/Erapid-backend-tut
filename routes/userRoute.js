const express=require('express');
const { getAllUsers, createUser } = require('../Controllers/userController');
const router=express.Router()

router.route('/users').get(getAllUsers);
router.route('/user/create').post(createUser);

module.exports=router