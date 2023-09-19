const router = require('express').Router();
const { blog, comments, user } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
})
module.exports = router;