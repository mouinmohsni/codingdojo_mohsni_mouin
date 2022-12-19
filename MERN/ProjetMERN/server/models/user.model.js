const mongoose = require('mongoose');

// near the top is a good place to group our imports
const bcrypt = require('bcrypt');
const uniqueValidator = require('mongoose-unique-validator')
const UserSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: [true, "First name is required"]
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"]
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true,"Account already exists."],
      validate: {
        validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Please enter a valid email"
      }
      
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be 8 characters or longer"]
    },

    prefrences: {
      type: String,
    },
    location: {
      type: String,
      // required: [true, 'Location is required'],
    
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
  }
  
  }, {timestamps: true});


  UserSchema.plugin(uniqueValidator);

  UserSchema.virtual('confirmPassword')
  .get( () => this._confirmPassword )
  .set( value => this._confirmPassword = value );

  UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
      this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
  });

// this should go after 
UserSchema.pre('save', function(next) {
  bcrypt.hash(this.password, 10)
    .then(hash => {
      this.password = hash;
      next();
    });
});





const User = mongoose.model('User', UserSchema);
module.exports  = User;   

