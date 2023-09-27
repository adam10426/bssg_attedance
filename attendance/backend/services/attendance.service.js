// import db from '@/config/db.config'
const db = require('../config/db.config')

const markAttendance  = async (attendance) =>
{
    try{
    const query = `INSERT INTO attendances (member_id,miqat_id,status) values (${attendance.memberId},${attendance.miqatId},'${attendance.status}') RETURNING *`;
    const record = await db.query(query)
    return record.rows[0]
    }
    catch(err){throw err}
}

const updateAttendance  = async (attendance) =>{ 
    try{
        const query = `UPDATE attendances SET status = '${attendance.status}' WHERE id=${attendance.id} RETURNING *`
        const record = await db.query(query)
        return record.rows[0]
    }
    catch(err){throw err}    
}

const getMiqatAttendance = async (miqatId)=>{
    try{
        const query  = `SELECT * , m.miqat FROM attendances INNER JOIN miqats as m ON miqat_id = m.id WHERE miqat_id = ${miqatId}`
        const record = await db.query(query)
        return record.rows
    }
    catch(err){throw err}
}

const getMemberAttendance = async (memberId)=>{
    try{
        const query = `SELECT * , m.miqat FROM attendances INNER JOIN miqats as m ON miqat_id = m.id WHERE member_id=${memberId}`
        const record = await db.query(query)
        return record.rows
    }
    catch(err){throw err}
}
module.exports = {
markAttendance,
updateAttendance,
getMiqatAttendance,
getMemberAttendance

}

