const router = require('express').Router();
let Address = require('../models/address.model');

router.route('/').get((req, res) => {
  Address.find()
    .then(address => res.json(address))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const id = req.body.id;
  const houseNumber = req.body.houseNumber;
  const roadName = req.body.roadName;
  const postCode = req.body.postCode;
  const town = req.body.town;
  const city = req.body.city;

  const newAddress = new Address({
    id,
    houseNumber,
    roadName,
    postCode,
    town,
    city
  });

  newAddress.save()
  .then(() => res.json('Address Added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Address.findById(req.params.id)
    .then(address => res.json(address))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Address.findByIdAndDelete(req.params.id)
    .then(() => res.json('Address deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Address.findById(req.params.id)
    .then(address => {
      address.id = req.body.id;
      address.houseNumber = req.body.houseNumber;
      address.roadName = req.body.roadName;
      address.postCode = req.body.postCode;
      address.town = req.body.town;
      address.city = req.body.city;

      address.save()
        .then(() => res.json('Address updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
