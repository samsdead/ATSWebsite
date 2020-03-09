const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  id: {
    type: int,
    required: true,
    unique: true,
    minlength: 10
  },
  firstName: {
    type: char,
    required: true,
    unique: false,
    minlength: 2
  },
},{
  timestamps: true,
}
);
