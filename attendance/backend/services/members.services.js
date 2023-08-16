const db = require("../config/db.config");
const UserNotFound = require('../utils/error.util')

const getAll = async () => {
    try {
        const records = await db.query("SELECT * FROM members");
        return records.rows
    }
    catch (err) { 
        throw err
    }
}

const getOne = async (id) => { 
    try {
        const record = await db.query(`SELECT * FROM members WHERE user_id=${id}`)
        return record.rows
    }
    catch (err) { 
        throw err;
    }
}

const updateOne = async (memberId,memberDetails) => { 
    try {
        let query = "UPDATE members SET"
        Object.entries(memberDetails).forEach(([key, value],index) => {
            if (key !== 'user_id')
                if(index+1 !== Object.entries(memberDetails).length)
                    query += ` ${key}='${value}',`
                else
                    query += ` ${key}='${value}' `;
        });
        query += `WHERE user_id=${memberId} RETURNING *`;
        const response = await db.query(query)
        return response.rows;
     }
    catch (err) { 
        throw err
    }
}
 
const checkUser = async (memberId) => { 
    const record = await db.query(`SELECT name FROM members WHERE user_id = ${memberId}`)
    if (record.rows.length === 0)
        throw new UserNotFound('No Record Found')   
}


module.exports = {
  getAll,
  getOne,
  updateOne,
  checkUser,
};