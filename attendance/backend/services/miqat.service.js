const db = require('../config/db.config')

const createOne = async (miqat)=>{
    try{
    const query = `INSERT INTO miqats (miqat) VALUES ('${miqat}') RETURNING *`;
    const record = await db.query(query)
    return record.rows[0]
    }
    catch(err){
        throw err
    }
}

const getAll = async () =>{
    try{
        const query = 'SELECT * FROM miqats WHERE void_status=false';
        const record = await db.query(query);
        return record.rows
    }
    catch(err){
        throw err
    }
}


const deleteOne =async (miqatId) =>{
    try{
        const query = `UPDATE miqats SET void_status = true WHERE id=${miqatId} RETURNING id`
        const record = await db.query(query)
        return record.rows[0]
    }
    catch(err){
        throw err
    }
}


const updateDate = async (miqatId,miqatDate) =>{
        try{
            const query = `UPDATE miqats SET created_at = ${miqatDate} WHERE id=${miqatId} RETURNING id,created_at`;
            const record = await db.query(query)
            return record.rows[0]
        }
        catch(err){
            throw err
        }
}   


// const getOne = async()

module.exports = {

    createOne,
    deleteOne,
    updateDate,
    getAll
}