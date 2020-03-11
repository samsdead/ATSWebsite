const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSalesSchema = new Schema({
  ticketId: {type: Number, required: true, unique: true, trim: true, minlength: 10},
  amountPaid: {type: Number, required: true},
  isPaid: {type: Boolean, required: true},
  dateSold: {type: Date},
  currency: {type: String, required: true},
  paymentType:{type: String},
  staffID:{type: Number},
  customerID:{type: Number},
  blanksID:{type:Number},
  currencyExchangeRateID:{type: Number}
},

{
  timestamps: true,
});

const TicketSales = mongoose.model('TicketSales', ticketSalesSchema);
module.exports = TicketSales;
