/**
  * This was the file I used to create the original 4 digit cracker idea.
  * cracker.js is the real, fully functional cracker that supports
  * more than 4 digits.
*/

const prompt = require('./input/prompt.js')({sigint: true});

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

let inputPwd = prompt('Enter a password to find: ');

const crack = () => {
  for (var pos1 = 0; pos1 <= 61; pos1++)
    for (var pos2 = 0; pos2 <= 61; pos2++)
      for (var pos3 = 0; pos3 <= 61; pos3++)
        for (var pos4 = 0; pos4 <= 61; pos4++)
          console.log(`${arr[pos1]}${arr[pos2]}${arr[pos3]}${arr[pos4]}`);
}

const crackPassword = (password, rules = arrDefault) => {
  let times = 0;
  for (var pos1 = 0; pos1 <= rules.length; pos1++)
    for (var pos2 = 0; pos2 <= rules.length; pos2++)
      for (var pos3 = 0; pos3 <= rules.length; pos3++)
        for (var pos4 = 0; pos4 <= rules.length; pos4++) {
          let current = `${rules[pos1]}${rules[pos2]}${rules[pos3]}${rules[pos4]}`;
          times++;
          if (current === password) {
            console.log();
            console.log(`Found password '${password}' on attempt ${times}.`);
            console.log();
            console.log(`At position pos1[${pos1}] pos2[${pos2}] pos3[${pos3}] pos4[${pos4}].`);
            console.log();
            console.log(`Using the following set of characters:`);
            console.log(rules);
            process.exit(1);
          }
        }
  console.log('Could not find password.');
}

crackPassword(inputPwd);
