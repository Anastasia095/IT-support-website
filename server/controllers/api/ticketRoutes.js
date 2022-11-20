const router = require('express').Router();
var cors = require('cors');

// const { Plants, Collection } = require('../../models');

router.use(cors());

router.post('/', async (req, res) => {
    try {
        const newTicket = await Ticket.create({
            ...req.body,
            status: "new"
            // user_id: req.session.user_id,
          });
      
          res.status(200).json(newTicket);
    } catch (err) {
        console.log("Something is Broken!");
        res.status(400).json(err);
    };
});

module.exports = router;