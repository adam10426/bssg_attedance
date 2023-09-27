const attendanceService = require('../services/attendance.service')

const markMemberAttendance = async (req, res, next) =>{
    try{
    const {attendanceArray}  = req.body
    const markedAttendanceArray = []
    for(let  memberAttendance of attendanceArray ){
        const markedAttendnace = await attendanceService.markAttendance(memberAttendance);
        markedAttendanceArray.push(markedAttendnace)
    }
    res.status(201).send(markedAttendanceArray)
}
catch (err){ next(err) }
}

const updateMemberAttendance = async (req, res, next)=>{
    try{
        const {attendanceArray} = req.body
        const updatedAttendanceArray = []
        for(let attendance of attendanceArray ){
            const updatedAttendance = await attendanceService.updateAttendance(attendance)
            updatedAttendanceArray.push(updatedAttendance)
        }
        res.status(200).send(updatedAttendanceArray)

    }
    catch(err){next(err)}
}

const getMiqatAttendance = async (req,res,next)=>{
    try{
        const miqatId = req.params.miqatId
        const response = await attendanceService.getMiqatAttendance(miqatId)
        res.status(200).send(response)
    }
    catch(err){next(err)}
}

const getMemberAttendance = async(req,res,next)=>{
    try{
        const memberId = req.params.memberId
        const response = await attendanceService.getMemberAttendance(memberId)
        res.status(200).send(response)
    }
    catch(err){throw err}
}
module.exports = {

    markMemberAttendance,
    updateMemberAttendance,
    getMiqatAttendance,
    getMemberAttendance
}