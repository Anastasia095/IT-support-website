const router = require('express').Router();
// const { Plants, Collection } = require('../../models');


router.post('/',  async (req, res) => {
    try {
        console.log("SERVER ALIVE!");
    //   const collectionAdd = await Collection.create({
    //     plant_id: req.body.plant_id,
    //     user_id: req.session.user_id,
     
  
      res.status(200).json(collectionAdd);
    } catch (err) {
        console.log("SERVER DEAD!");
      res.status(400).json(err);
    }
  });

  module.exports = router;