
const express = require('express');
const router = express.Router();
const Controller = require('../controllers/controller');

router.get('/food/', Controller.showFood)
router.get('/food/:id', Controller.detailFood)
router.post('/food/', Controller.addFood)
router.delete('/food/:id', Controller.deleteFood)
router.put('/food/:id', Controller.editFood)
router.patch('/food/:id', Controller.statusFood)
router.patch('/food/:id', Controller.activeFood)

module.exports = router