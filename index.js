#!/usr/bin/env node
'use strict';

const program = require('commander');

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


  //method 2
  program
    .version('0.0.1')
    .command(' <req> [optional]')
    .description('command description')
    .option('-o, --option','we can still have add l options')
    .action(function(req,optional){
      console.log('.action() allows us to implement the command');
      console.log('User passed %s', req);
      if (optional) {
        optional.forEach(function(opt){
          console.log("User passed optional arguments: %s", opt);
        });
      }
    });
  program.parse(process.argv); // notice that we have to parse in a new statement.

  //Example:
// $ cli-app command requiredValue -o

// method 3
// program
// .version('0.0.1')
// .command('command <req> [optional]','command description')
// .command('command2','command2 description')
// .command('command3','command3 description')
// .parse(process.argv);
