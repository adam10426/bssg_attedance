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
        await memberService.checkUser(req.params.id)
        const member = await memberService.getOne(req.params.id)
        res.status(200).send(member)
    }
    catch (err) { 
        res.status(err.status).send(err.message);
    }

}

const updateMember = async (req, res) => { 
    try { 
        await memberService.checkUser(req.params.id);
        const updatedMemeber = await memberService.updateOne(req.params.id,req.body)
        res.status(200).send(updatedMemeber);
    }
    catch (err) { 
        res.status(err.status).send(err.message)
    }
}




module.exports = {
  getAllMembers,
  getMember,
  updateMember
};