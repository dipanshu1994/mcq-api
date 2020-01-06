const mongoose = require('mongoose')
const testschema = mongoose.Schema({
    quesno: {
        type: Number 
    },
    question: {
        type: String
    },
    options: [{
        ch1: String, 
        ch2: String, 
        ch3: String, 
        ch4: String 
    }],
    correct: {
        type: Number
    },
    marks: {
        type: Number
    }
})

var testmodel = mongoose.model('testmodels', testschema);

module.exports = testmodel;