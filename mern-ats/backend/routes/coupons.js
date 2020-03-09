const router = require('express').Router();
let Coupons = require('../models/coupons.model');

router.route('/').get((req, res) => {
  Coupons.find()
    .then(coupons => res.json(coupons))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const id = req.body.id;
  const departureTime = req.body.departureTime;
  const arrivalTime = req.body.arrivalTime;
  const departedFromTime = req.body.departedFromTime;
  const arrivalToTime = req.body.arrivalToTime;
  const hasAuditorCoupon = req.body.hasAuditorCoupon;

  const newCoupons = new Coupons({
    id,
    departureTime,
    arrivalTime,
    departureTime,
    arrivalToTime,
    departedFromTime,
    hasAuditorCoupon
  });

  newCoupons.save()
  .then(() => res.json('Coupons Added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Coupons.findById(req.params.id)
    .then(coupons => res.json(coupons))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Coupons.findByIdAndDelete(req.params.id)
    .then(() => res.json('Coupon deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Coupons.findById(req.params.id)
    .then(coupons => {
      coupons.id = req.body.id;
      coupons.departureTime = req.body.departureTime;
      coupons.arrivalTime = req.body.arrivalTime;
      coupons.departedFromTime = req.body.departedFromTime;
      coupons.hasAuditorCoupon = req.body.hasAuditorCoupon;


      coupons.save()
        .then(() => res.json('Coupon updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
