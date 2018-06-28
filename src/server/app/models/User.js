const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const crypto = require('crypto');
const Schema = mongoose.Schema;

const userSchema = new Schema({

  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    unique: true,
    required: true,
  },

  password: {
    type: String,
    required: true,
    select: false,
  },

});

userSchema.pre('save', function(next) {
  if(this.isModified('password')) {
    return next();
  }

  this.password = crypto.createCipher('aes-128-cbc', this.password);
  next();
});

userSchema.plugin(timestamps, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

module.exports = mongoose.model('User', userSchema);
