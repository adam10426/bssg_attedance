const express = require("express");
const router = express.Router();
const memberController = require('../controllers/member.controller')

router.get('/all', memberController.getAllMembers)
router.get('/:id', memberController.getMember)
router.put('/update/:id', memberController.updateMember)
router.delete('/delete/:id', memberController.removeMember)
router.post('/add/', memberController.addMember)

module.exports=router