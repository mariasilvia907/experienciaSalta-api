const mongoose = require('mongoose');

const member = mongoose.model('Member', {
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
    }
});

module.exports = Member;