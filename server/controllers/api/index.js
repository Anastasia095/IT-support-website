const router = require('express').Router();
const ticketRoutes = require('./ticketRoutes');
const userRoutes = require('./userRouts');

router.use('/send', ticketRoutes);
router.use('/user', userRoutes);

module.exports = router;