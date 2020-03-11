const router = require('express').Router();
let Blanks = require('../models/blanks.model');

router.route('/').get((req, res) => {
  Blanks.find()
    .then(blanks => res.json(blanks))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const id = req.body.id;
  const blanksNum = req.body.blanksNum;
  const status = req.body.status;
  const date = Date.parse(req.body.date);
  const customerID = req.body.customerID;
  const couponsID = req.body.couponsID;

  const newBlanks = new Blanks({
    id,
    blanksNum,
    status,
    date,
    customerID,
    couponsID
  });

  newBlanks.save()
  .then(() => res.json('Blanks Added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Blanks.findById(req.params.id)
    .then(blanks => res.json(blanks))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Blanks.findByIdAndDelete(req.params.id)
    .then(() => res.json('Blanks deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Blanks.findById(req.params.id)
    .then(blanks => {
      blanks.id = req.body.id;
      blanks.blanksNum = req.body.blanksNum;
      blanks.status = req.body.status;
      blanks.date = Date.parse(req.body.date);
      blanks.customerID = req.body.customerID;
      blanks.couponsID = req.body.couponsID;



      blanks.save()
        .then(() => res.json('Blanks updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
