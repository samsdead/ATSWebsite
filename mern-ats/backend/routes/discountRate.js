const router = require('express').Router();
let DiscountRate = require('../models/discountRate.model');

router.route('/').get((req, res) => {
  DiscountRate.find()
    .then(discountRate => res.json(discountRate))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const id = req.body.id;
  const fixedDiscount = req.body.fixedDiscount;
  const flexibleDiscount = req.body.flexibleDiscount;

  const newDiscountRate = new DiscountRate({
    id,
    fixedDiscount,
    flexibleDiscount
  });

  newDiscountRate.save()
  .then(() => res.json('Discount Rate Added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  DiscountRate.findById(req.params.id)
    .then(discountRate => res.json(discountRate))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  DiscountRate.findByIdAndDelete(req.params.id)
    .then(() => res.json('Discount Rate deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  DiscountRate.findById(req.params.id)
    .then(discountRate => {
      discountRate.id = req.body.id;
      discountRate.fixedDiscount = req.body.fixedDiscount;
      discountRate.flexibleDiscount = req.body.flexibleDiscount;



      discountRate.save()
        .then(() => res.json('Discount Rate updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
