const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stockSchema = new Schema({
  id: {type: Number, required: true, unique: true, trim: true, minlength: 10},
  staffID: {type: Number, required: true},
  blanksID: {type: Number, required: true},
},
  {
  timestamps: true,
});

const Stock = mongoose.model('Stock', stockSchema);
module.exports = Stock;
