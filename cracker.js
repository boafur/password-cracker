// very early, not working cracker, use p.js for the time being

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

arrDefault = ['1', '2', '3'];

let password = prompt('Enter a password to crack: ');
let currentPos = [];
let attempts = 0;

function output(password, attempts) {
  console.log();
  console.log(`Found password '${password}' on attempt ${attempts}.`);
  process.exit(1);
}

function init() {
  for (var i = 0; i < password.length; i++) {
    currentPos[i] = '';
  }
  attempts = 0;
}

function crack(password, rules) {
  if (password === currentPos.join()) {
    output(password, attempts);
  } else {
    for (var i = 0; i < password.length; i++) {
      crack(password, rules);
    }
  }
}

function crackPassword(password, rules = arrDefault) {
  crack(password, rules, true);
  for (let i = 0; i <= password.length; i++) {
    crack(password, rules, false);
  }
  console.log('Could not find password.');
}

function getPw(count, attempt = '') {
  if (count < 1) return;
  for (var i = 0; i < arrDefault.length; i++) {
    console.log(attempt);
    attempt += arrDefault[i];
    getPw(count-1, attempt);
  }
}

function nl(toPrint) {
  process.stdout.write(toPrint);
}

// init();
// crack(password, arrDefault);

getPw(password.length);

// crackPassword(password);
