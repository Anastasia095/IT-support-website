const router = require('express').Router();
var cors = require('cors');

// const { Plants, Collection } = require('../../models');

router.use(cors());

router.post('/', async (req, res) => {
    try {
        console.log("Route Works!");
        //   const collectionAdd = await Collection.create({
        //     plant_id: req.body.plant_id,
        //     user_id: req.session.user_id,
        console.log(req.body);

        //   res.status(200).json(collectionAdd);
    } catch (err) {
        console.log("Something is Broken!");
        res.status(400).json(err);
    };
});

module.exports = router;