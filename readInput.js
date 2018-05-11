var fs = require("fs");

fs.readFile('input.txt', function(err, data){
  if(err) throw err;
  console.log(data.toString());
});

console.log("Program ended");


// BAD WAY = BLOCKING WAY
// var fs = require("fs");
//
// var data = fs.readFileSync('input.txt');
//
// console.log(data.toString());
// console.log("program Ended");
