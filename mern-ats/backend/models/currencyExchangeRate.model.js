const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const currencyExchangeRateSchema = new Schema({
  id: {type: Number, required: true, unique: true, trim: true, minlength: 10},
  rate: {type: Number, required: true},
  currencyCode: {type: String, required: true},
  date: {type: Number},
},
  {
  timestamps: true,
});

const CurrencyExchangeRate = mongoose.model('CurrencyExchangeRate', currencyExchangeRateSchema);
module.exports = CurrencyExchangeRate;
