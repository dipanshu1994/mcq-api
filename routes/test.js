const express = require('express');
const router = express.Router();
const Test = require('../models/queans')
const TestScore = require('../models/answer')

/* GET Question and choices */
router.get('/', (req, res, next) => {
  Test.find({})
    .then(result => {
      TestScore.find({})
        .then(response => {
          let totalMarks = 0;
          response.forEach(element => {
            totalMarks = totalMarks + element.marks
          })
          res.status(200).json({
            questions: result,
            totalMarks: totalMarks
          })
        })
    })
});

router.post('/checkTest', (req, res, next) => {
  let { quesno, selectedOption } = req.body
  TestScore.find({})
    .then(response => {
      let totalMarks = 0;
      response.forEach(element => {
        totalMarks = totalMarks + element.marks
      })
      TestScore.find({ quesno: quesno })
        .then(response => {
          if (response[0].correct == selectedOption) {
            res.status(200).json({
              result: "correct",
              quesno: response[0].quesno,
              marks: response[0].marks,
              totalMarks: totalMarks
            })
          } else {
            res.status(200).json({
              result: "not correct",
              marks: response[0].marks,
              quesno: response[0].quesno,
              totalMarks: totalMarks
            })
          }
        })
        .catch(error => {
        })
    })
})

module.exports = router;
