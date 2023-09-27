const router  = require('express').Router()
const attendanceController = require('../controllers/attendance.controller')

router.get('/miqat/:miqatId',attendanceController.getMiqatAttendance)
router.get('/member/:memberId',attendanceController.getMemberAttendance)
router.post('/mark/', attendanceController.markMemberAttendance)
router.patch('/update/', attendanceController.updateMemberAttendance)


module.exports = router