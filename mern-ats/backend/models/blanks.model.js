const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blanksSchema = new Schema({
  id: {type: Number, required: true, unique: true, trim: true, minlength: 10},
  blanksNum: {type: Number, required: true},
  status: {type: Boolean, required: true},
  date: {type: Number, required: true},
  customerID: {type: Number, required: true},
  couponsID:{type: Number},

},

{
  timestamps: true,
});

const Blanks = mongoose.model('Blanks', blanksSchema);
module.exports = Blanks;
