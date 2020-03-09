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

  const newStaff = new Staff({
    id,
    firstName,
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

      staff.save()
        .then(() => res.json('Staff updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
