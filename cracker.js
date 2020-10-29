const prompt = require('./input/prompt.js')({ sigint: true });
const arrDefault = [
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

let inputPwd = prompt('Enter a password to crack: ');
let currentPos = [];
let attempts = 0;

const output = (password, attempts) => {
  console.log();
  console.log(`Found password '${password}' on attempt ${attempts}.`);
  process.exit(1);
}

const crack = (password, rules, init, test = false) => {
  if (init) {
    for (var i = 0; i < password.length; i++) {
      currentPos[i] = '';
    }
    console.log(currentPos);
    attempts = 0;
  } else if (!init) {
    for (var i = 0; i < password.length; i++) {
      //
    }
  } else if (test) {

  }
}

const crackPassword = (password, rules = arrDefault) => {
  crack(password, rules, true);
  for (let i = 0; i <= password.length; i++) {
    crack(password, rules, false);
  }
  console.log('Could not find password.');
}

crackPassword(inputPwd);
