const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
  id: {type: Number, required: true, unique: true, trim: true, minlength: 10},
  houseNumber: {type: Number, required: true},
  roadName: {type: String, required: true},
  postCode: {type: String, unique: true},
  town: {type: String},
  city:{type: String},
},

{
  timestamps: true,
});

const Address = mongoose.model('Address', addressSchema);
module.exports = Address;
