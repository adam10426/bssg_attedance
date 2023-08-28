const db = require('../config/db.config')
const memberService = require('../services/members.services')

const getAllMembers = async (req, res,next)=>{ 
    try {
        const members = await memberService.getAll()
        res.status(200).send(members);
    }
    catch (err) { 
       return  next(err)
    }
}

const getMember = async (req, res,next) => { 
    try {
        await memberService.checkUser(req.params.id)
        const member = await memberService.getOne(req.params.id)
        res.status(200).send(member)
    }
    catch (err) { 
       return next(err)
    }

}

const updateMember = async (req, res,next) => { 
    try { 
        await memberService.checkUser(req.params.id);
        const updatedMemeber = await memberService.updateOne(req.params.id,req.body)
        res.status(200).send(updatedMemeber);
    }
    catch (err) { 
       return  next(err)
    }
}




module.exports = {
  getAllMembers,
  getMember,
  updateMember
};