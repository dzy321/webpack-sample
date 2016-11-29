var config = require('./config.json');
// Greeter.js
module.exports = function() {
  var greet = document.createElement('div');
  greet.textContent = config.greetText;
  return greet;
};