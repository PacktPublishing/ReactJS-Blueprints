var test = require('tape');
var Diceroll = require('../components/diceroll');
var Game = require('../engine');
var Config = require('../config');

test('Testing diceroll - zero difficulty',
     function (t) {
  var roll = Diceroll(
    0,
    Config,
    'Dead easy spell'
  );

  t.equal(roll, true);
  t.end()
});

test('Testing diceroll - max difficulty',
     function (t) {
  var roll = Diceroll(
    100,
    Config,
    'Impossible spill'
  );

  t.equal(roll, false);
  t.end()
});

// Note, the test below will occasionally
// fail, and that's expected.
test('Testing diceroll - 10% difficulty',
     function (t) {
  var roll = Diceroll(
    10,
    Config,
    'Easy spell'
  );

  t.equal(roll, true);
  t.end()
});

