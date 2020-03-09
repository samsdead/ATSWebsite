const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const staffSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
    trim: true,
    minlength: 10
  },
  firstName: {
    type: String,
    required: true,
    unique: false,
    minlength: 2
  },
},{
  timestamps: true,
});

const Staff = mongoose.model('Staff', customerSchema);
module.exports = Staff;
