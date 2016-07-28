let creature_spells = [
  "acid_blob",
  "boring_beetle",
  "demonspawn",
  "dragon",
  "golden_dragon",
  "giant_mite",
  "rat",
  "hydra",
  "orc_warrior",
  "ooze",
  "hobgoblin",
  "harpy",
  "griffon",
  "hell_knight"
];

let attack_spells = [
  "disbelieve",
  "lightning"
];

exports.creature_spells = creature_spells;
exports.attack_spells = attack_spells;

let spells = {
  "boring_beetle" : {
    owner: "",
    image: '/beasts/boring_beetle.png',
    width: 32,
    height: 32,
    flying: false,
    rideable: false,
    pos:{
      x: Math.random()*480,
      y: Math.random()*480
    },
    properties: {
      illusion: false,
      type: 'creature',
      range: 1,
      difficulty: "10",
      strength: "7",
      health: "2",
      class: "neutral",
    },
    speed: (Math.random()*1)+0.5
  },
  "golden_dragon" : {
    owner: "",
    image: '/beasts/golden_dragon.png',
    width: 32,
    height: 32,
    flying: true,
    rideable: true,
    pos:{
      x: Math.random()*480,
      y: Math.random()*480
    },
    properties: {
      illusion: false,
      type: 'creature',
      range: 4,
      difficulty: "90",
      strength: "75",
      health: "50",
      class: "good",
    },
    speed: (Math.random()*1)+0.5
  },
  "rat" : {
    owner: "",
    image: '/beasts/rat.png',
    width: 32,
    height: 32,
    flying: false,
    rideable: false,
    pos:{
      x: 1,
      y: 1
    },
    properties: {
      illusion: false,
      type: 'creature',
      range: 1,
      difficulty: "15",
      strength: "5",
      health: "8",
      class: "chaos",
    },
    speed: (Math.random()*1)+0.5
  },
  "giant_mite" : {
    owner: "",
    image: '/beasts/giant_mite.png',
    width: 32,
    height: 32,
    flying: false,
    rideable: false,
    pos:{
      x: 1,
      y: 1
    },
    properties: {
      illusion: false,
      type: 'creature',
      range: 1,
      difficulty: "15",
      strength: "1",
      health: "3",
      class:"neutral",
    },
    speed: (Math.random()*1)+0.5
  },
  "demonspawn" : {
    owner: "",
    image: '/beasts/demonspawn.png',
    width: 32,
    height: 32,
    flying: false,
    rideable: false,
    pos:{
      x: 1,
      y: 1
    },
    properties: {
      type: 'creature',
      illusion: false,
      range: 2,
      difficulty: "75",
      strength: "50",
      health: "35",
      class:"chaos",
    },
    speed: (Math.random()*1)+0.5
  },
  "hydra" : {
    owner: "",
    image: '/beasts/hydra3.png',
    width: 32,
    height: 32,
    flying: false,
    rideable: false,
    pos:{
      x: 1,
      y: 1
    },
    properties: {
      type: 'creature',
      illusion: false,
      range: 1,
      difficulty: "65",
      strength: "30",
      health: "25",
      class:"chaos"
    },
    speed: (Math.random()*1)+0.5
  },
  "orc_warrior" : {
    owner: "",
    image: '/beasts/orc_warrior.png',
    width: 32,
    height: 32,
    flying: false,
    rideable: false,
    pos:{
      x: 1,
      y: 1
    },
    properties: {
      illusion: false,
      type: 'creature',
      range: 1,
      difficulty: "35",
      strength: "10",
      health: "15",
      class:"chaos",
    },
    speed: (Math.random()*1)+0.5
  },
  "acid_blob" : {
    owner: "",
    image: '/beasts/acid_blob.png',
    width: 32,
    height: 32,
    flying: false,
    rideable: false,
    pos:{
      x: 1,
      y: 1
    },
    properties: {
      illusion: false,
      type: 'creature',
      range: 1,
      difficulty: "15",
      strength: "7",
      health: "5",
      class:"chaos"
    },
    speed: (Math.random()*1)+0.5
  },
  "hobgoblin" : {
    owner: "",
    image: '/beasts/hobgoblin.png',
    width: 32,
    height: 32,
    flying: false,
    rideable: false,
    pos:{
      x: 1,
      y: 1
    },
    properties: {
      illusion: false,
      type: 'creature',
      range: 1,
      difficulty: "45",
      strength: "15",
      health: "15",
      class:"chaos"
    },
    speed: (Math.random()*1)+0.5
  },
  "harpy" : {
    owner: "",
    image: '/beasts/harpy.png',
    width: 32,
    height: 32,
    flying: false,
    rideable: false,
    pos:{
      x: 1,
      y: 1
    },
    properties: {
      illusion: false,
      type: 'creature',
      range: 2,
      difficulty: "65",
      strength: "25",
      health: "25",
      class:"chaos"
    },
    speed: (Math.random()*1)+0.5
  },
  "griffon" : {
    owner: "",
    image: '/beasts/griffon.png',
    width: 32,
    height: 32,
    flying: false,
    rideable: false,
    pos:{
      x: 1,
      y: 1
    },
    properties: {
      illusion: false,
      type: 'creature',
      range: 2,
      difficulty: "60",
      strength: "30",
      health: "35",
      class:"good",
    },
    speed: (Math.random()*1)+0.5
  },
  "hell_knight" : {
    owner: "",
    image: '/beasts/hell_knight.png',
    width: 32,
    height: 32,
    flying: false,
    rideable: false,
    pos:{
      x: 1,
      y: 1
    },
    properties: {
      illusion: false,
      type: 'creature',
      range: 2,
      difficulty: "90",
      strength: "70",
      health: "65",
      class:"chaos",
    },
    speed: (Math.random()*1)+0.5
  }

}

exports.spells = spells;
