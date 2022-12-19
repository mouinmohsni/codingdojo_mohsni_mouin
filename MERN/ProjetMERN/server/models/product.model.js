const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
{
    title: {
        type: String,
        // required: [true, 'title is required'],
    },
    category: {
        type: String,
        // required: [true, 'category is required'],
    },
    genre: {
        type: String,
    },
    image: {
        type: String,
    },
    location: {
        type: String,
        // required: [true, 'Location is required'],
    },

    adress :{
        type: String,
        // required: [true, 'Location is required'],
    },


    date : {
        type: String,
        // required: [true, 'date is required'],
    },
    
    description : {
        type: String,
        // required: [true, 'desctription is required'],
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    reviews: [
        {
          name: {
            type: mongoose.Schema.Types.ObjectId,
            
          },
          rating: {
            type: Number,
            
          },
          review: {
            type: String,
            
          },
          like: {
            type: Boolean,
            
          },
        },
      ],
},
{ timestamps: true }
)
module.exports.Product = mongoose.model('Product', ProductSchema);