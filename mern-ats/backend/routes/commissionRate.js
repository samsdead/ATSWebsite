const router = require('express').Router();
let CommissionRate = require('../models/commissionRate.model');

router.route('/').get((req, res) => {
  CommissionRate.find()
    .then(commissionRate => res.json(commissionRate))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const id = req.body.id;
  const rate = req.body.rate;
  const date = req.body.date;

  const newCommissionRate = new CommissionRate({
    id,
    rate,
    date
  });

  newCommissionRate.save()
  .then(() => res.json('Commission Rate Added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  CommissionRate.findById(req.params.id)
    .then(commissionRate => res.json(commissionRate))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  CommissionRate.findByIdAndDelete(req.params.id)
    .then(() => res.json('Commission Rate deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  CommissionRate.findById(req.params.id)
    .then(stock => {

      commissionRate.id = req.body.id;
      commissionRate.rate = req.body.rate;
      commissionRate.date = req.body.date;




      commissionRate.save()
        .then(() => res.json('Commission Rate updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
