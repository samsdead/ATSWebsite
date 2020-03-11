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
  const lastName = req.body.lastName;
  const dOB = Date.parse(req.body.dOB);
  const telephoneNo = req.body.telephoneNo;
  const email = req.body.email;
  const isValued = req.body.isValued;
  const discountID = req.body.discountID;
  const addressID = req.body.addressID;
  const discountRateID = req.body.discountRateID;

  const newCustomer = new Customer({
    id,
    firstName,
    lastName,
    dOB,
    telephoneNo,
    email,
    isValued,
    discountID,
    addressID,
    discountRateID
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
      customer.lastName = req.body.lastName;
      customer.dOB = Date.parse(req.body.dOB);
      customer.telephoneNo = req.body.telephoneNo;
      customer.email = req.body.email;
      customer.isValued = req.body.isValued;
      customer.discountID = req.body.discountID;
      customer.addressID = req.body.addressID;
      customer.discountRateID = req.body.discountRateID;


      customer.save()
        .then(() => res.json('Customer updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
