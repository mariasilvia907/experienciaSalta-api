const mongoose = require('mongoose');

const blogNote = mongoose.model('blogNote', {
    title: {
        type: String,
        required: true        
        },
    autor: {
        type: String,
        required: true
    },
    etiqueta: {
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

module.exports = blogNote;