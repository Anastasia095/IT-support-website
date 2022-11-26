const router = require('express').Router();
const { Ticket } = require('../../models');
var cors = require('cors');

// const { Plants, Collection } = require('../../models');

var corsOptions = {
    origin: 'http://127.0.0.1:3000',
    credentials: true
};

router.use(cors(corsOptions));

router.post('/', async (req, res) => {
    try {
        console.log(req.session);
        const newTicket = await Ticket.create({
            ...req.body,
            status: "new",
            user_id: req.session.user_id,
          });
      
          res.status(200).json(newTicket);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    };
});

module.exports = router;