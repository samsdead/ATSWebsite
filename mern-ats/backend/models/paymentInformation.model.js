const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentInformationSchema = new Schema({
  id: {type: Number, required: true, unique: true, trim: true, minlength: 10},
  title: {type: String, required: true, minlength: 2},
  nameOnCard: {type: String, required: true, minlength: 2},
  cardNumber:{type: Number},
  expiryDate: {type: Date},
  date: {type: Date},
  securityCode:{type: Number},
  customerID: {type: String, unique: true},
},
  {
  timestamps: true,
});

const PaymentInformation = mongoose.model('PaymentInformation', paymentInformationSchema);
module.exports = PaymentInformation;
