const express = require("express");
const router = express.Router();
const memberController = require('../controller/member.controller')

router.get('/all', memberController.getAllMembers)
router.get('/:id', memberController.getMember)

module.exports=router