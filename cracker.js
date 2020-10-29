// very early, not working cracker, use p.js until this one is finished

const prompt = require('./input/prompt.js')({ sigint: true });
let arrDefault = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
  'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
  'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g',
  'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2',
  '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$',
  '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[',
  ']', '{', '}', '\\', '|', ';', ':', '"', "'", ',', '<',
  '.', '>', '/', '?', '`', '~'
];
let nl = (input) => process.stdout.write(input);

arrDefault = ['1', '2', '3'];

let password = prompt('Enter a password to crack: ');
let currentPos = [];
let attempts = 0;

function output(password, attempts) {
  console.log();
  console.log(`Found password '${password}' on attempt ${attempts}.`);
  process.exit(1);
}

function init(yn = true) {
  for (var i = 0; i < password.length; i++) {
    currentPos[i] = '';
  }
  if (yn) {
    attempts = 0;
  }
}
init();

function getPw(pwd, times) {
  if (pwd === pos.join()) return pwd;
  
}

getPw(password, password.length);
