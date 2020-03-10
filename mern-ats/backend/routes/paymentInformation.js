const router = require('express').Router();
let PaymentInformation = require('../models/paymentInformation.model');

router.route('/').get((req, res) => {
  PaymentInformation.find()
    .then(paymentInformation => res.json(paymentInformation))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const nameOnCard = req.body.nameOnCard;
  const cardNumber = req.body.cardNumber;
  const expiryDate = req.body.expiryDate;
  const date = req.body.date;
  const securityCode = req.body.securityCode;
  const customerID = req.body.customerID;

  const newPaymentInformation = new PaymentInformation({
    id,
    title,
    nameOnCard,
    cardNumber,
    expiryDate,
    date,
    securityCode,
    customerID
  });

  newPaymentInformation.save()
  .then(() => res.json('Payment Payment Added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  PaymentInformation.findById(req.params.id)
    .then(paymentInformation => res.json(paymentInformation))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  PaymentInformation.findByIdAndDelete(req.params.id)
    .then(() => res.json('Payment Information deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  PaymentInformation.findById(req.params.id)
    .then(paymentInformation => {
      paymentInformation.id = req.body.id;
      paymentInformation.title = req.body.title;
      paymentInformation.nameOnCard = req.body.nameOnCard;
      paymentInformation.cardNumber = req.body.cardNumber;
      paymentInformation.expiryDate = req.body.expiryDate;
      paymentInformation.date = req.body.date;
      paymentInformation.securityCode = req.body.securityCode;
      paymentInformation.customerID = req.body.customerID;



      paymentInformation.save()
        .then(() => res.json('Payment Information updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
