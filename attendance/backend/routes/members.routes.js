const express = require("express");
const router = express.Router();
const memberController = require('../controllers/member.controller')

router.get('/all', memberController.getAllMembers)
router.get('/:id', memberController.getMember)
router.post('/:id', memberController.updateMember)

module.exports=router