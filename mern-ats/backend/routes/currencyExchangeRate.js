const router = require('express').Router();
let CurrencyExchangeRate = require('../models/currencyExchangeRate.model');

router.route('/').get((req, res) => {
  CurrencyExchangeRate.find()
    .then(currencyExchangeRate => res.json(currencyExchangeRate))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const id = req.body.id;
  const rate = req.body.rate;
  const currencyCode = req.body.currencyCode;
  const date = Date.parse(req.body.date);

  const newCurrencyExchangeRate = new CurrencyExchangeRate({
    id,
    rate,
    currencyCode,
    date
  });

  newCurrencyExchangeRate.save()
  .then(() => res.json('Currency Exchange Rate Added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  CurrencyExchangeRate.findById(req.params.id)
    .then(currencyExchangeRate => res.json(currencyExchangeRate))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  CurrencyExchangeRate.findByIdAndDelete(req.params.id)
    .then(() => res.json('Currency Exchange Rate deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  CurrencyExchangeRate.findById(req.params.id)
    .then(currencyExchangeRate => {
      currencyExchangeRate.id = req.body.id;
      currencyExchangeRate.rate = req.body.rate;
      currencyExchangeRate.currencyCode = req.body.currencyCode;
      currencyExchangeRate.date = Date.parse(req.body.date);



      currencyExchangeRate.save()
        .then(() => res.json('Currency Exchange Rate updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
