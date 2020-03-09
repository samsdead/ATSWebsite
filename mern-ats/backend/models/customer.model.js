const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  id: {type: Number, required: true, unique: true, trim: true, minlength: 10},
  firstName: {type: String, required: true, unique: false, minlength: 2},
  lastName: {type: String, required: true, unique: false, minlength: 2},
  dOB: {type: Date},
  telephoneNo: {type: Number, required: true, unique: true, trim: true, minlength: 10},
  email: {type: String, unique: true},
  isValued:{type: Boolean},
  discountID: {type: Number, unique: true},
  addressID:{type: Number, unique: true},
  DiscountRateID: {type: Number, unique: true}
},

{
  timestamps: true,
});

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;
