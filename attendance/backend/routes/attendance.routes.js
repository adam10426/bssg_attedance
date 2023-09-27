const router  = require('express').Router()
const attendanceController = require('../controllers/attendance.controller')


router.post('/mark/', attendanceController.markMemberAttendance)


module.exports = router