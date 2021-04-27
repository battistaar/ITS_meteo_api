const express = require('express');
const router = express.Router();
const recordRouter = require('./record/record.router');

router.use('/records', recordRouter);

router.get('/', (req, res) => {
    res.redirect('/records');
})

module.exports = router;