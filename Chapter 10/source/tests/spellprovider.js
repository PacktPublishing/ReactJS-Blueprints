var test = require('tape');
var Game = require('../engine');
var SpellProvider =
  require('../components/spellprovider');

test('Testing spellProvider. Should return a set of 10 spells',
     function (t) {
       var Config = require('../config');
       console.log(Config)
       var spells = SpellProvider(Config.allSpells);
       t.equal(spells.length, 10);
       t.end()
     });

