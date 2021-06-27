const router = require('express').Router();
const postapi = require('./posts-route')
const homeroutes = require('./home-routes')

router.use('/', homeroutes)
router.use('/api', postapi)

module.exports = router;