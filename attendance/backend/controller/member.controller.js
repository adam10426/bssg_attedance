const db = require('../config/db.config')
const memberService = require('../services/members.services')

const getAllMembers = async (req, res)=>{ 
    try {
        const members = await memberService.getAll()
        res.status(200).send(members);
    }
    catch (err) { 
        res.status(500).send("message:Internal server error")
    }
}

const getMember = async (req, res) => { 
    try {
        const member = await memberService.getOne(req.params.id)
        res.status(200).send(member)
    }
    catch (err) { 
        res.status(500).send(err)
    }

}




module.exports = {
  getAllMembers,
  getMember
};