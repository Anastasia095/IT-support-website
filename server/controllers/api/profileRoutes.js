const router = require('express').Router();
const { Ticket, User } = require('../../models');
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
        });

        const userInfo = await User.findAll({
            where: {
                id: req.session.user_id
            }
        });

        const ticket = ticketData.map((ticket) => ticket.get({ plain: true }));
        const user = userInfo.map((user) => user.get({ plain: true }));
        const userData = {
            user_name: user[0].user_name
        }
        ticket.push(userData);
        console.log(ticket[ticket.length - 1].user_name);
        res.json(ticket);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

module.exports = router;