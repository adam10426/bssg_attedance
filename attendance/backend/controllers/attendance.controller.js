const attendanceService = require('../services/attendance.service')

const markMemberAttendance = async (req, res, next) =>{
    try{
    const {attendanceArray}  = req.body
    const markedAttendanceArray = []
    for(let  memberAttendance of attendanceArray ){
        const markedAttendnace = await attendanceService.markAttendance(memberAttendance);
        markedAttendanceArray.push(markedAttendnace)
    }
    res.status(200).send(markedAttendanceArray)
}
catch (err){ next(err) }
}


module.exports = {

    markMemberAttendance
}