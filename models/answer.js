const mongoose = require('mongoose')
const testAnswerschema = mongoose.Schema({
    quesno: {
        type: Number 
    },
    correct: {
        type: Number
    },
    marks: {
        type: Number
    }
})

var testansmodels = mongoose.model('testansmodels', testAnswerschema);

module.exports = testansmodels;