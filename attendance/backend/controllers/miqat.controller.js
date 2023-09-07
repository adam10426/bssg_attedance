const miqatService = require('../services/miqat.service')

const getAllMiqats = async(req,res,next)=>{
 try{
    const response = await miqatService.getAll()
    res.status(200).send(response)
 }
 catch(err){
    next(err)
 }   
} 

const deleteMiqat = async(req,res,next)=>{
try{
    const miqatId = req.params.miqatId
    const deletedMiqat = await miqatService.deleteOne(miqatId)
    res.status(204).send()
}
catch(err){
    next(err)
}   
} 

const createMiqat = async(req,res,next)=>{
    try{
        const {miqatName} = req.body
        const response  =  await miqatService.createOne(miqatName)
        res.status(201).send(response)
    }
    catch(err){
       next(err)
    }   
   } 

const updateMiqat = async(req,res,next)=>{
try{
    res.status(200).send()
}
catch(err){
    next(err)
}   
} 

module.exports = {
    getAllMiqats,
    deleteMiqat,
    createMiqat,
    updateMiqat
}