const router = require('express').Router();
let Staff = require('../models/staff.model');

router.route('/').get((req, res) => {
  Staff.find()
    .then(staff => res.json(staff))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const id = req.body.id;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const dOB = req.body.dOB;
  const telephoneNo = req.body.telephoneNo;
  const email = req.body.email;
  const commissionRate = req.body.commissionRate;
  const userName = req.body.userName;
  const passwordHash = req.body.passwordHash;
  const addressID = req.body.addressID;
  const commissionRateID = req.body.commissionRateID;

  const newStaff = new Staff({
    id,
    firstName,
    lastName,
    dOB,
    telephoneNo,
    email,
    commissionRate,
    userName,
    passwordHash,
    addressID,
    commissionRateID
  });

  newStaff.save()
  .then(() => res.json('Staff Added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Staff.findById(req.params.id)
    .then(staff => res.json(staff))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Staff.findByIdAndDelete(req.params.id)
    .then(() => res.json('Staff deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Staff.findById(req.params.id)
    .then(staff => {
      staff.id = req.body.id;
      staff.firstName = req.body.firstName;
      staff.lastName = req.body.lastName;
      staff.dOB = req.body.dOB;
      staff.telephoneNo = req.body.telephoneNo;
      staff.email = req.body.email;
      staff.commissionRate = req.body.userName;
      staff.passwordHash = req.body.passwordHash;
      staff.addressID = req.body.addressID;
      staff.commissionRateID = req.body.commissionRateID;

      staff.save()
        .then(() => res.json('Staff updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
