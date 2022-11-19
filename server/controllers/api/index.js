const router = require('express').Router();
const ticketRoutes = require('./ticketRoutes');

router.use('/send', ticketRoutes);


module.exports = router;