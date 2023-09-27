// import db from '@/config/db.config'
const db = require('../config/db.config')

const markAttendance  = async (attendance) =>
{
    try{
    const query = `INSERT INTO attendances (member_id,miqat_id,status) values (${attendance.memberId},${attendance.miqatId},'${attendance.status}') RETURNING *`;
    const response = await db.query(query)
    return response.rows[0]
    }
    catch(err){throw err}
}

module.exports = {
markAttendance

}

