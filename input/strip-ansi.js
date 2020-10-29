/**
 * code from https://www.npmjs.com/package/strip-ansi
 */

'use strict';
const ansiRegex = require('./ansi-regex.js');

const stripAnsi = string => typeof string === 'string' ? string.replace(ansiRegex(), '') : string;

module.exports = stripAnsi;
module.exports.default = stripAnsi;
