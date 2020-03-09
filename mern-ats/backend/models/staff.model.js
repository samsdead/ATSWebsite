const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const staffSchema = new Schema({
  id: {type: Number, required: true, unique: true, trim: true, minlength: 10},
  firstName: {type: String, required: true, minlength: 2},
  lastName: {type: String, required: true, minlength: 2},
  dOB:{type: Date},
  telephoneNo: {type: Number, required: true, unique: true, trim: true, minlength: 10},
  email: {type: String, unique: true},
  commissionRate:{type: Number},
  userName: {type: String, unique: true},
  passwordHash: {type: String},
  addressID: {type: Number},
  commissionRateID: {type: Number},
},
  {
  timestamps: true,
});

const Staff = mongoose.model('Staff', staffSchema);
module.exports = Staff;
