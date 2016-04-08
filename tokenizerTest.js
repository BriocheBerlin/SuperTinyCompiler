function testInput() {
  return "(subtract 4 2)";
}

function expectedResult() {
  return [
    { type: 'paren', value: '(' },
    { type: 'name', value: 'substract' },
    { type: 'number', value: '4' },
    { type: 'number', value: '2' },
    { type: 'paren', value: ')' },
  ];
}

function Lexer(program){
  this.program = program
}

// don't patch built-in types on real applications
// might break things!

// prototypes
Array.prototype.first = function() {
  return this[0]
}

Array.prototype.last = function() {
  return this[this.length -1]
}


// 'this' führt hier dazu, dass 'program' nicht in der function übergeben werden muss
// besser. objektorientierung

Lexer.prototype.createTokens = function() {
  console.log(this.program)
  var arr = this.program.split("")
  console.log(arr)
  console.log(arr.first())
  console.log(arr.last())
  
  if(arr.first() === "(" && arr.last() === ")")
    return [
      { type: 'paren', value: '(' },
      { type: 'paren', value: ')' },
    ];
  else 
    throw new Error("Lexer Error!!!!")
}

function main(){
  var lexer = new Lexer(testInput())
  var tokens = lexer.createTokens()
  console.log(tokens)
  // var output = lex(testInput());
  // console.log(output);
  // console.log(lex("Something Else"))
}
main();
