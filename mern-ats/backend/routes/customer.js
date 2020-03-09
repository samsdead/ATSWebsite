const router = require('express').Router();
let Customer = require('../models/customer.model');

router.route('/').get((req, res) => {
  Customer.find()
    .then(customer => res.json(customer))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const id = req.body.id;
  const firstName = req.body.firstName;

  const newCustomer = new Customer({
    id,
    firstName,
  });

  newCustomer.save()
  .then(() => res.json('Customer Added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Customer.findById(req.params.id)
    .then(customer => res.json(customer))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Customer.findByIdAndDelete(req.params.id)
    .then(() => res.json('Customer deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Customer.findById(req.params.id)
    .then(customer => {
      customer.id = req.body.id;
      customer.firstName = req.body.firstName;

      customer.save()
        .then(() => res.json('Customer updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
