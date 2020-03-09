const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const couponsSchema = new Schema({
  id: {type: Number, required: true, unique: true, trim: true, minlength: 10},
  departureTime: {type: Number, required: true},
  arrivalTime: {type: Number, required: true},
  departedFromTime: {type: Number, required: true},
  arrivalToTime: {type: Number, required: true},
  hasAuditorCoupon:{type: Boolean},
},

{
  timestamps: true,
});

const Coupons = mongoose.model('Coupons', couponsSchema);
module.exports = Coupons;
