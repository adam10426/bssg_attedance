const db = require("../config/db.config");
const {UserNotFound} = require('../utils/error.util')

const getAll = async () => {
    try {
        const records = await db.query("SELECT * FROM members WHERE is_deleted=false");
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

const removeOne = async (memberdId)=>{
    try{
    const query = `UPDATE members SET is_deleted = true WHERE user_id = ${memberdId}`
    await db.query(query)
    }
    catch(err){
        throw err
    }

}

const addOne = async(memberDetail) => {
    try{
    const query = `INSERT INTO members (name,father_name,last_name,its,contact,email,type,rank,is_deleted)
    VALUES ('${memberDetail.first_name}','${memberDetail.father_name}','${memberDetail.last_name}',${memberDetail.its},'${memberDetail.contact}','${memberDetail.email}','${memberDetail.type}','${memberDetail.rank}',false);
    `
    await db.query(query)
    
    }
    catch(err){
        throw err
    }
}

 
const checkUser = async (memberId) => { 
    const record = await db.query(`SELECT name FROM members WHERE user_id = ${memberId} AND is_deleted=false`)
    if (record.rows.length === 0)
        throw new UserNotFound('No User Found')   
}


module.exports = {
  getAll,
  getOne,
  updateOne,
  removeOne,
  addOne,
  checkUser
};