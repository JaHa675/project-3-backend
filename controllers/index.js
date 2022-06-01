const router = require('express').Router();

const apiRoutes = require('./api');
const frontEndRoutes = require('./frontEndRoutes');

router.use('/', frontEndRoutes);
router.use('/api', apiRoutes);

router.get("/sessions", (req, res) => {
    res.json(req.session)
});

module.exports = router;