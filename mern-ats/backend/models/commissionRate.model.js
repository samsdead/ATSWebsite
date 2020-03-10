const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commissionRateSchema = new Schema({
  id: {type: Number, required: true, unique: true, trim: true, minlength: 10},
  rate: {type: Number, required: true},
  date: {type: Number, required: true},
},
  {
  timestamps: true,
});

const CommissionRate = mongoose.model('CommissionRate', commissionRateSchema);
module.exports = CommissionRate;
