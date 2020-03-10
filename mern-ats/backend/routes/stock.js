const router = require('express').Router();
let Stock = require('../models/stock.model');

router.route('/').get((req, res) => {
  Stock.find()
    .then(stock => res.json(stock))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const id = req.body.id;
  const staffID = req.body.staffID;
  const blanksID = req.body.blanksID;

  const newStock = new Stock({
    id,
    staffID,
    blanksID
  });

  newStock.save()
  .then(() => res.json('Stock Added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Stock.findById(req.params.id)
    .then(stock => res.json(stock))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Stock.findByIdAndDelete(req.params.id)
    .then(() => res.json('Stock deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Stock.findById(req.params.id)
    .then(stock => {
      stock.id = req.body.id;
      stock.staffID = req.body.staffID;
      stock.blanksID = req.body.blanksID;



      stock.save()
        .then(() => res.json('Stock updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
