const router = require('express').Router();
var cors = require('cors');
const { User } = require('../../models');



var corsOptions = {
    origin: 'http://127.0.0.1:3000',
    credentials: true
};

router.use(cors(corsOptions));

router.post('/', async (req, res) => {
    console.log(req.body);

    try {
        console.log("TEST===============>>>>>>");
        const userData = await User.create({
            ...req.body
        });
        req.session.save(() => {
            //added this to get user ID saved to session///ANA
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });
        if (!userData) {
            res.status(404).json({ message: 'Incorrect Email. Please try again!' });
            return;
        }
        const validPassword = userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect Password. Please try again!' });
            return;
        }
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            console.log(req.sessionID);
            res.send(req.sessionID);

        });
    }
    catch (err) {
        console.log('login error')
        res.status(500).json(err);
    }
});

module.exports = router;