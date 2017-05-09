#!/usr/bin/env node

'use strict';

const program = require('commander');
const csv = require('csv-parser');
const fs = require('fs');
//method 2
let questionsArray = [];

let parseQuestions = (callback) => {
  //I think this is passing back each question as it's own object, not as an array of objects

  fs.createReadStream('questions.csv')
    .pipe(csv())
    .on('data', function(data) {
      // console.log(data.question_id)
      questionsArray.push(data);
      console.log('something distinct',questionsArray);
      // callback(questionsArray);
    })
};

let getQuestions = (req) => {
  req = parseInt(req, 10);

  if ((typeof req === 'number') && Math.floor(req) === req) {
    console.log('user passed %s', req);
    parseQuestions(function(res) {
      // questionsArray = res;
      console.log(typeof res);
      // console.log('one questions',questionsArray)
      for (let i = 0; i < req; i++) {
        // console.log(i, req)
        // console.log('the array of question ids');
      }

    })
  } else {
    console.log('Please provide a valid number');
  }
};

program
  .version('0.0.1')
  .command('create-test <int>')
  .description('Create a test with the provided number of questions')
  .option('')
  .action(getQuestions);
program.parse(process.argv); // notice that we have to parse in a new statement.



//Example:
// $ cli-app command requiredValue -o


//############################################################
// method 3
// program
// .version('0.0.1')
// .command('command <req> [optional]','command description')
// .command('command2','command2 description')
// .command('command3','command3 description')
// .parse(process.argv);

//##################################

//method 1
// program
//   .version('0.0.1')
//   .option('-o, --option','option description')
//   .option('-m, --more','we can have as many options as we want')
//   .option('-i, --input [optional]','optional user input')
//   .option('-I, --another-input <required>','required user input')
//   .parse(process.argv); // end with parse to parse through the input

//Examples:
// $ cli-app -om -I hello
// $ cli-app --option -i optionalValue -I requiredValue
