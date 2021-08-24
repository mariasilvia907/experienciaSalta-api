const mongoose = require('mongoose');

const Experience = mongoose.model('Experience', {
    name : {
        type: String,
        required: true        
        },
    description: {
        type: String,
        required: true
    },
    img: { 
        type: String,
        required: true
    },
    link:{
        type: String,
        required: true
    }

});

module.exports = Experience;