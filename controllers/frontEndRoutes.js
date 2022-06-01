const router = require('express').Router();
const { User } = require('../models');

router.get("/", (req, res) => {
    console.log(req.session)
});

module.exports = router;