var test = require('tape');
var markTiles = require('../engine/video/markTiles');
var Game = require('../engine');
var Config = require('../config');

// initalize map
var map = Game.map(
  Config.tileSize, Config.width, Config.height
);

// insert player into map
map[Config.entities.players[0].pos.x][Config.entities.players[0].pos.y]=1;


test('Testing boring beetle - range 1', function (t) {
  // check for valid moves
  var valid_moves = Game.markValidTiles(
    Config.spells,
    Config.entities.players[0],
    'boring_beetle',
    Config,
    map
  );

  var expected_moves = [ { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 1, y: 0 }, { x: 1, y: 2 }, { x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 } ];
  t.deepEqual(valid_moves, expected_moves);
  t.end()
});

test('Testing rat - range 2', function (t) {
  // check for valid moves
  var valid_moves = Game.markValidTiles(
    Config.spells,
    Config.entities.players[0],
    'rat',
    Config,
    map
  );

  var expected_moves =   [ { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 1, y: 0 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 3, y: 0 }, { x: 3, y: 1 }, { x: 3, y: 2 }, { x: 3, y: 3 } ];
  t.deepEqual(valid_moves, expected_moves);
  t.end()
});

test('Testing golden dragon - range 5', function (t) {
  // check for valid moves
  var valid_moves = Game.markValidTiles(
    Config.spells,
    Config.entities.players[0],
    'golden_dragon',
    Config,
    map
  );

  var expected_moves =  [ { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 1, y: 0 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 1, y: 4 }, { x: 1, y: 5 }, { x: 1, y: 6 }, { x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }, { x: 2, y: 5 }, { x: 2, y: 6 }, { x: 3, y: 0 }, { x: 3, y: 1 }, { x: 3, y: 2 }, { x: 3, y: 3 }, { x: 3, y: 4 }, { x: 3, y: 5 }, { x: 3, y: 6 }, { x: 4, y: 0 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 4, y: 5 }, { x: 4, y: 6 }, { x: 5, y: 0 }, { x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 }, { x: 5, y: 4 }, { x: 5, y: 5 }, { x: 5, y: 6 }, { x: 6, y: 0 }, { x: 6, y: 1 }, { x: 6, y: 2 }, { x: 6, y: 3 }, { x: 6, y: 4 }, { x: 6, y: 5 }, { x: 6, y: 6 } ];
  t.deepEqual(valid_moves, expected_moves);
  t.end()
});


