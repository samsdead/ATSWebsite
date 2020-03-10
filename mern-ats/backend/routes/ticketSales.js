const router = require('express').Router();
let TicketSales = require('../models/ticketSales.model');

router.route('/').get((req, res) => {
  TicketSales.find()
    .then(ticketSales => res.json(ticketSales))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const ticketId = req.body.ticketId;
  const amountPaid = req.body.amountPaid;
  const isPaid = req.body.isPaid;
  const dateSold = req.body.dateSold;
  const currency = req.body.currency;
  const paymentType = req.body.paymentType;
  const staffID = req.body.staffID;
  const customerID = req.body.customerID;
  const blanksID = req.body.blanksID;
  const currencyExchangeRateID = req.body.currencyExchangeRateID;


  const newTicketSale = new TicketSales({
    ticketId,
    amountPaid,
    isPaid,
    dateSold,
    currency,
    paymentType,
    staffID,
    customerID,
    blanksID,
    currencyExchangeRateID

  });

  newTicketSale.save()
  .then(() => res.json('Ticket Sale Added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  TicketSales.findById(req.params.id)
    .then(ticketSales => res.json(ticketSales))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  TicketSales.findByIdAndDelete(req.params.id)
    .then(() => res.json('Ticket Sale deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  TicketSales.findById(req.params.id)
    .then(ticketSales => {
      ticketSales.ticketId = req.body.ticketId;
      ticketSales.amountPaid = req.body.amountPaid;
      ticketSales.isPaid = req.body.isPaid;
      ticketSales.dateSold = req.body.dateSold;
      ticketSales.currency = req.body.currency;
      ticketSales.paymentType = req.body.paymentType;
      ticketSales.staffID = req.body.staffID;
      ticketSales.customerID = req.body.customerID;
      ticketSales.blanksID = req.body.blanksID;
      ticketSales.currencyExchangeRateID = req.body.currencyExchangeRateID;

      ticketSales.save()
        .then(() => res.json('Ticket sale updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
