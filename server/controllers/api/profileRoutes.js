const router = require('express').Router();
const { Ticket } = require('../../models');
var cors = require('cors');

var corsOptions = {
    origin: 'http://127.0.0.1:3000',
    credentials: true
};

router.use(cors(corsOptions));

router.get('/', async (req, res) => {
    try {
        console.log(req.session);
        console.log(req.body);

        const ticketData = await Ticket.findAll({
            where: {
                user_id: req.session.user_id
            }
        })

        const ticket = ticketData.map((ticket) => ticket.get({ plain: true }));
        console.log(ticket);
        res.json(ticket);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

module.exports = router;