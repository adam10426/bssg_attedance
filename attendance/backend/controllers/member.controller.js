const db = require('../config/db.config')
const memberService = require('../services/members.service')

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

const removeMember = async(req,res,next)=>{
    try{
        await memberService.checkUser(req.params.id)
        await memberService.removeOne(req.params.id)
        res.status(204).send()
    }
    catch(err){
        next(err)
    }
}

const addMember = async(req,res,next)=>{
    try{
        const memberDetail = req.body
        await memberService.addOne(req.body)
        res.status(200).send(memberDetail)
    }
    catch(err){
        next(err)
    }
}



module.exports = {
  getAllMembers,
  getMember,
  updateMember,
  addMember,
  removeMember
};