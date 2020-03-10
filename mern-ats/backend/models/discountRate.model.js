const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const discountRateSchema = new Schema({
  id: {type: Number, required: true, unique: true, trim: true, minlength: 10},
  fixedDiscount: {type: Number},
  flexibleDiscount: {type: Number},
},
  {
  timestamps: true,
});

const DiscountRate = mongoose.model('DiscountRate', discountRateSchema);
module.exports = DiscountRate;
