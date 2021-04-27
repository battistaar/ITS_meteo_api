const express = require('express');
const router = express.Router();
const recordController = require('./record.controller');

router.get('/', recordController.list);
router.get('/:id', recordController.details);
router.post('/', recordController.create);
router.put('/:id', recordController.update);

module.exports = router;