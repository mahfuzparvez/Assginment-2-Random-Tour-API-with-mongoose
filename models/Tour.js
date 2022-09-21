const mongoose = require('mongoose');

// schema
const tourSchema = mongoose.Schema({
    name: {
      type: String,
      required: [true, "Please provide a name for travel destination"],
      trim: true,
      unique: true,
      minLength: [3, "Destination name must be at least 3 character"],
      maxLength: [100, "Destination name is too large"],
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price can't negative"],
      /* validate: {
        validate: (value) =>{
          const isInteger = Number.isInteger(value);
          if(isInteger){
            return true
          }
          else{
            return false
          }
        }
      } */
    },
    image: {
      type: String,
      required: true,
    },
    description:{
      type: String,
      required: true
    },
    
    
  })
  
  // mongoose middleware for saving data: pre/post
  
  // tourSchema.pre('save', function(){
  //   console.log('Before saving data');
  //   next();
  // })
  // tourSchema.post('save', function(){
  //   console.log('After saving data');
  //   next();
  // })
  
  
  // SCHEMA => MODEL => QUERY
  const Tour = mongoose.model('Tour', tourSchema)

  module.exports = Tour;