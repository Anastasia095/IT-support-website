const router = require('express').Router();
const ticketRoutes = require('./ticketRoutes');
const userRoutes = require('./userRouts');
const profileRoutes = require('./profileRoutes');

router.use('/send', ticketRoutes);
router.use('/user', userRoutes);
router.use('/profile', profileRoutes);

module.exports = router;