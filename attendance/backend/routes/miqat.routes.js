const router  = require('express').Router();
const miqatController = require('../controllers/miqat.controller')

router.get('/all',miqatController.getAllMiqats)
router.delete('/delete/:miqatId', miqatController.deleteMiqat)
router.post('/create',miqatController.createMiqat)
// router.patch('/update/miqat',miqatController.updateMiqat)

module.exports = router